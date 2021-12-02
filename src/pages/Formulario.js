import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {FormControl,  FormLabel, RadioGroup, FormControlLabel, Radio, TextField, MenuItem, InputLabel, Select, Button } from '@mui/material';
import './profecionEstilos.css';

const getRawTeacher = [
        {nombre:'profesor1', idMateria:'Materiaid1'},
        {nombre:'profesor2', idMateria:'Materiaid2'},
        {nombre:'profesor3', idMateria:'Materiaid3'},
        {nombre:'profesor4', idMateria:'Materiaid4'},
        {nombre:'profesor5', idMateria:'Materiaid5'},
        {nombre:'profesor6', idMateria:'Materiaid6'}
];

function Formulario() {
        var preguntasObject = [
                {texto:"1. El (la) profesor (a) conoce y maneja los temas tratados en clase.", val: ''},
                {texto:"2. El (la) profesor (a) utiliza recursos diferentes para dar las explicaciones, tales como videos, presentaciones, actividades, etc..", val: ''},
                {texto:"3. El (la) profesor (a) genera espacios de debate en los que los estudiantes pueden expresarse libremente", val: ''},
                {texto:"4. El (la) profesor (a) responde las preguntas que se le formulan.", val: ''},
                {texto:"5. El (la) profesor (a) es respetuoso en el trato hacia sus estudiates.", val: ''},
                {texto:"6. El (la) profesor (a) establece fechas límite de entrega en común acuerdo con los estudiantes.", val: ''},
                {texto:"7. El (la) profesor (a) cumple sus horarios de clase con puntualidad.", val: ''},
                {texto:"8. El (la) profesor (a) motiva a sus estudiantes.", val: ''},
                {texto:"9. El (la) profesor (a) busca diversas metodologías de enseñanza acordes con las metodologías de aprendizaje de sus estudiantes.", val: ''},
                {texto:"10. Volvería a tomar un curso con este (a) profesor (a).", val: ''}
        ];
        const [nota, setNota] = useState('');
        const [profesorActivo, setProfesorActivo] = useState(getRawTeacher[0].idMateria);
        const [preguntas, setPreguntas] = useState(preguntasObject);
        const navigate = useNavigate();
                
        

        const funcionCambiarDeProfesor = function(eventoCambioProfesor)  {
          setProfesorActivo(eventoCambioProfesor.target.value);
        }
        const crearEncuesta = () => {
                console.log(nota);
                console.log(preguntas);
                console.log(profesorActivo);
                let sumNotas = 0;
                let lasPreguntasEstanCompletas = true;

                for (let i=0; i < preguntas.length; i++ ) {
                        const preguntaValue = parseFloat(preguntas[i].val);
                        if (preguntas[i].val === '') {
                                lasPreguntasEstanCompletas = false;
                                break;
                        }
                        sumNotas += preguntaValue;
                }

                if (!lasPreguntasEstanCompletas  || nota === '') {
                        alert("Faltan campos por responder");
                        return;
                }

                console.log(sumNotas / preguntas.length );
                navigate('/', { replace: true });
        }
        const changeQuestionValue = (index, newVal) => {
                const newPreguntas = preguntas.map((x) => x);
                newPreguntas[index].val = newVal;
                setPreguntas(newPreguntas);
        }
    return (
        <div className="form-container">
                <h1 className="section-separate">Calificar a un profesor</h1>
                <div>
                        <div class="selector-de-profesores">
                                <FormControl fullWidth >
                                        <InputLabel id="demo-simple-select-label">Profesor</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={profesorActivo}
                                        label="Profesor"
                                        onChange={funcionCambiarDeProfesor}
                                        >
                                        {getRawTeacher.map((teacher) => <MenuItem value={teacher.idMateria}>{teacher.nombre + '-' + teacher.idMateria}</MenuItem>)}
                                        </Select>
                                </FormControl>
                        </div>
                        <TextField id="outlined-basic" label="Cuál es tu cédula:" variant="outlined" />
                        <TextField className="basic-separator"  onChange={(event) => setNota(event.target.value)} value={nota} id="outlined-basic" label="Que nota tuviste:" variant="outlined" />
                </div>

                <p className="section-separate">Para las preguntas que se encuentran a continuación, por favor califique de 1 a 5, teniendo en cuenta que 1 es totalmente en desacuerdo y 5 es totalmente de acuerdo.</p>
                {preguntas.map((element, index) =>
                        <FormControl className="row" component="fieldset">
                                <FormLabel component="legend">{element.texto}</FormLabel>
                                <RadioGroup
                                aria-label="gender"
                                name="radio-buttons-group"
                                value={element.val}
                                onChange={(event) => changeQuestionValue(index, event.target.value)}
                                row
                                >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        <FormControlLabel value="4" control={<Radio />} label="4" />
                                        <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                        </FormControl>        
                )}
                <div className="form-button">
                        <Button
                        color="inherit"
                        variant="contained"
                        className="green section-separate"
                        onClick={crearEncuesta}
                        >
                        Enviar Encuesta
                        </Button>
                </div>      
        </div>
        );
  }
  
  export default Formulario