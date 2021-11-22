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

export default function DashboardApp() {
  const [profesorActivo, setProfesorActivo] = useState('Profesora Rivera');
  const funcionCambiarDeProfesor = function(eventoCambioProfesor)  {
    setProfesorActivo(eventoCambioProfesor.target.value);
  }
  return (
    <Page title="Dashboard | Minimal-UI">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Bienvenido Coordinador</Typography>
        </Box>
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
            <MenuItem value={'Profesora Rivera'}>Profesora Rivera</MenuItem>
            <MenuItem value={'Profesora Cadena'}>Profesora Cadena</MenuItem>
            <MenuItem value={'Profesora Wendy'}>Profesora Wendy</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <AppItemOrders />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
