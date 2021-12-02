import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------



export default function AppConversionRates(props) {
  const { profesores } = props;
  const CHART_DATA = [{ data: profesores.map((profesor) => {
    let suma = 0;
    profesor.encuestasEstudiantes.forEach((encuesta) => suma += encuesta.calificacionTotalEncuesta);
    console.log(suma);
    return suma / profesor.encuestasEstudiantes.length;

  })  }];
  const nombreProfesores = profesores.map((profesor) => profesor.nombre);
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: nombreProfesores
    }
  });

  return (
    <Card>
      <CardHeader title="Comparacion de profesores"  />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
