import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './profecionEstilos.css';

export function CreateTeacher(props) {
    const [nombre, setNombre] = useState('');
    const [idMateria, setIdMateria] = useState('');
    const { submitCallback } = props;

    const createTeacher = () => {
        console.log(nombre);
        console.log(idMateria);
        submitCallback();
    }
    return (
        <div className="teacher-container">
            <TextField id="outlined-basic" onChange={(event) => setNombre(event.target.value)} value={nombre} label="Ingresa tu nombre" variant="outlined" />
            <TextField className="basic-separator"  onChange={(event) => setIdMateria(event.target.value)} value={idMateria} id="outlined-basic" label="Código de la materia" variant="outlined" />
            <div className="form-button">
                <Button
                color="inherit"
                variant="contained"
                className="green section-separate"
                onClick={createTeacher}
                >
                Inscribir Profesor
                </Button>
            </div>  
        </div>            
        
    );
}