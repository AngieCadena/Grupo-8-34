import { Schema, model } from "mongoose";

const encuestaSchema = new Schema(
  [{
      calificacionTotalEncuesta: {
          type: Number,
          required: true,
      },
      promedioEstudiante: {
          type: Number,
          required: true,
      }
  }]
);

const profesorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    materia: {
      type: String,
      required: true,
    },
    cursos: {
      type: String,
      required: false,
    },
    estado: {
      type: Boolean,
      required: false,
    },
    encuestaProfesores: [
      {
        type: encuestaSchema,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Profesor", profesorSchema);
