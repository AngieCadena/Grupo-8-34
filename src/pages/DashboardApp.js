// material
import { Box, Grid, Container, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppItemOrders,
  AppWeeklySales,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppConversionRates
} from '../components/_dashboard/app';
import React, { useState } from 'react';
import './profecionEstilos.css';

// ----------------------------------------------------------------------
function loadApp () {
  const tempAppObject = {
    profesores:[
        {
            identificacion: "1",
            nombre: "profesor 1",
            imagen: "urlentexto",
            idMateria: "PIM-2021-3",
            encuestasEstudiantes: [
                {
                    calificacionTotalEncuesta: 3.0,
                    promedioEstudiante: 5.0
                },
                {
                  calificacionTotalEncuesta: 4.0,
                  promedioEstudiante: 3.3
                },
                {
                  calificacionTotalEncuesta: 1.0,
                  promedioEstudiante: 2.0
                },
                {
                  calificacionTotalEncuesta: 1.0,
                  promedioEstudiante: 1.2
                }
            ]
        },
        {
          identificacion: "2",
          nombre: "profesor 2",
          imagen: "urlentexto",
          idMateria: "PIM-2021-33",
          encuestasEstudiantes: [
            {
                calificacionTotalEncuesta: 5.0,
                promedioEstudiante: 5.0
            },
            {
              calificacionTotalEncuesta: 4.0,
              promedioEstudiante: 3.3
            },
            {
              calificacionTotalEncuesta: 2.0,
              promedioEstudiante: 2.0
            },
            {
              calificacionTotalEncuesta: 3.0,
              promedioEstudiante: 1.2
            },
            {
              calificacionTotalEncuesta: 1.0,
              promedioEstudiante: 1.1
            }
        ]
      },
      {
        identificacion: "3",
        nombre: "profesor 3",
        imagen: "urlentexto",
        idMateria: "PIM-2022-1",
        encuestasEstudiantes: [
          {
              calificacionTotalEncuesta: 5.0,
              promedioEstudiante: 5.0
          },
          {
            calificacionTotalEncuesta: 4.0,
            promedioEstudiante: 3.3
          },
          {
            calificacionTotalEncuesta: 4.0,
            promedioEstudiante: 2.0
          },
          {
            calificacionTotalEncuesta: 2.0,
            promedioEstudiante: 1.2
          },
          {
            calificacionTotalEncuesta: 1.0,
            promedioEstudiante: 1.1
          }
      ]
      },
      {
        identificacion: "4",
        nombre: "profesor 4",
        imagen: "urlentexto",
        idMateria: "PIM-2022-2",
        encuestasEstudiantes: [
          {
              calificacionTotalEncuesta: 5.0,
              promedioEstudiante: 5.0
          },
          {
            calificacionTotalEncuesta: 3.0,
            promedioEstudiante: 3.3
          },
          {
            calificacionTotalEncuesta: 3.0,
            promedioEstudiante: 2.0
          }
      ]
      },
      {
        identificacion: "5",
        nombre: "profesor 5",
        imagen: "urlentexto",
        idMateria: "PIM-2020-1",
        encuestasEstudiantes: [
          {
              calificacionTotalEncuesta: 5.0,
              promedioEstudiante: 5.0
          },
          {
            calificacionTotalEncuesta: 4.0,
            promedioEstudiante: 3.3
          },
          {
            calificacionTotalEncuesta: 1.0,
            promedioEstudiante: 2.0
          },
          {
            calificacionTotalEncuesta: 1.0,
            promedioEstudiante: 1.2
          },
          {
            calificacionTotalEncuesta: 1.0,
            promedioEstudiante: 1.1
          }
      ]
      },
      {
        identificacion: "6",
        nombre: "profesor 6",
        imagen: "urlentexto",
        idMateria: "PIMX-2020",
        encuestasEstudiantes: [
          {
              calificacionTotalEncuesta: 1.0,
              promedioEstudiante: 5.0
          },
          {
            calificacionTotalEncuesta: 2.0,
            promedioEstudiante: 3.3
          },
          {
            calificacionTotalEncuesta: 3.0,
            promedioEstudiante: 2.0
          },
          {
            calificacionTotalEncuesta: 5.0,
            promedioEstudiante: 1.2
          },
          {
            calificacionTotalEncuesta: 1.0,
            promedioEstudiante: 1.1
          }
      ]
      },
  ]
  }

  return tempAppObject;
}

const profesores = loadApp().profesores;

export default function DashboardApp() {
  const [profesorActivo, setProfesorActivo] = useState(profesores[0]);
  const funcionCambiarDeProfesor = function(eventoCambioProfesor)  {
    
    const idMateriaIndex = profesores.findIndex((profesor) => profesor.idMateria === eventoCambioProfesor.target.value);
    setProfesorActivo(profesores[idMateriaIndex]);
  }

  const promedioCalculado = () => {
    let sum = 0;
    profesorActivo.encuestasEstudiantes.forEach((encuesta) => {
      sum += parseFloat(encuesta.calificacionTotalEncuesta);
    });
    return sum / profesorActivo.encuestasEstudiantes.length;
  }

  
  return (
    <Page title="Dashboard | Profecion">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Bienvenido Coordinador</Typography>
        </Box>
      <div class="selector-de-profesores">
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label">Profesor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={profesorActivo.idMateria}
            label="Profesor"
            onChange={funcionCambiarDeProfesor}
          >
            {profesores.map((profesor) => 
              <MenuItem value={profesor.idMateria}>{profesor.nombre+'-'+ profesor.idMateria}</MenuItem>  
            )}
            
            
          </Select>
        </FormControl>
      </div>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWeeklySales numEncuestas={profesorActivo ? profesorActivo.encuestasEstudiantes.length: ''} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <AppItemOrders grade={promedioCalculado()}/>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits profesor={profesorActivo} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits profesor={profesorActivo}/>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates profesores={profesores}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
