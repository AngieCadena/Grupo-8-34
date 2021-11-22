import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [5.0, 4.3, 4.48, 4.70, 3.20, 2.10, 1.10, 5.00, 4.40, 5] }];

export default function AppConversionRates() {
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
      categories: [
        'Profesora Rivera',
        'Profesora Cadena',
        'Profesora Wendy',
        'Profesor Carlos',
        'Profesor Juan',
        'Profesor Benito',
        'Profesor Charles',
        'Profesor Eduardo',
        'Profesor Camilo',
        'Profesor Juan Manuel'
      ]
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
