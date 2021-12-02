import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------



export default function AppWebsiteVisits(props) {
  const {profesor} = props;
  const encuestasBasePromedioEstudiante = profesor.encuestasEstudiantes.sort((encuesta1, encuesta2)=> {
    return encuesta1.promedioEstudiante - encuesta2.promedioEstudiante;
  });
  const ejeX = encuestasBasePromedioEstudiante.map((encuesta)=>encuesta.promedioEstudiante);
  const ejeY = encuestasBasePromedioEstudiante.map((encuesta)=>encuesta.calificacionTotalEncuesta);
  const CHART_DATA = [
    {
      name: 'Calificación Promedio Profesor',
      type: 'area',
      data: ejeY
    }
  ];

  const chartOptions = merge(BaseOptionChart(), {
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: ejeX,
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} estudiantes`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Calificación profesor vs Promedio Estudiante" subheader="Relación entre la nota que obtuvo el estudiante y resultado de la evaluación" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
