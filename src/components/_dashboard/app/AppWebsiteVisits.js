import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Calificación Promedio Profesor',
    type: 'area',
    data: [1.0, 2.0, 3.1, 2.2, 5.0, 3.2, 1.1, 0.3, 3.5, 4.7, 3.0]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      'Promedio 1.0',
      'Promedio 2.0',
      'Promedio 3.0',
      'Promedio 4.0',
      'Promedio 5.0',
    ],
    
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
      <CardHeader title="Calificación profesor vs Promedio Estudiante" subheader="Relación entre nota y resultado de la evaluación" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
