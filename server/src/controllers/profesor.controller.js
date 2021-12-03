import Profesor from "../models/Profesor";
import Encuesta from "../models/Encuesta";

export const createProfesor = async (req, res) => {
  const { nombre, materia, cursos, estado, encuestaProfesor } = req.body;
  const encuestasFound = await encuestaProfesor.find({ name: { $in: encuestaProfesor } });

  try {
    const newProfesor = new Profesor({
      nombre, 
      materia, 
      cursos, 
      estado,
      encuestaProfesores: encuestasFound.map((encuesta) => encuesta._id),
    });

    const profesorSaved = await newProfesor.save();

    res.status(201).json(profesorSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getProfesorById = async (req, res) => {
  const { profesorId } = req.params;

  const profesor = await Profesor.findById(profesorId);
  res.status(200).json(profesor);
};

export const getProfesores = async (req, res) => {
  const profesores = await Profesor.find();
  return res.json(profesores);
};

export const getProfesoresWithoutPrivilegies = async (req, res) => {
  const profesores = await Profesor.find();
  return res.json(profesores.map((profesor) => {
    return {
      nombre: profesor.nombre,
      idMateria: profesor.materia,
      idProfesor: profesor.id,
    }
  }));
};

export const updateProfesorById = async (req, res) => {
  const updatedProfesor = await Profesor.findByIdAndUpdate(
    req.params.profesorId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProfesor);
};

export const crearEncuesta = async (req, res) => {
  const { profesorId } = req.params;
  const profesor = await Profesor.findById(profesorId);
/*   console.log(profesor);
  console.log(req.body);
  console.log(profesor.encuestaProfesores); */
  
  const newEncuesta =  new Encuesta({
    calificacionTotalEncuesta : req.body.calificacionTotalEncuesta, 
    promedioEstudiante : req.body.promedioEstudiante,
  });
  
  console.log(newEncuesta);
  profesor.encuestaProfesores.push(newEncuesta);
  console.log(profesor.encuestaProfesores);
  profesor.save();

  /* const encuestaProfesor  = {
    encuestaProfesores: profesor.encuestaProfesores.push(req.body)
  }
  const updatedProfesor = await Profesor.findByIdAndUpdate(
    req.params.profesorId,
    encuestaProfesor,
    {
      new: true,
    }
  ); */
  res.status(204).json(profesor);
};

export const deleteProfesorById = async (req, res) => {
  const { profesorId } = req.params;

  await Profesor.findByIdAndDelete(profesorId);

  // code 200 is ok too
  res.status(204).json({message: 'Profesor eliminado'});
};
