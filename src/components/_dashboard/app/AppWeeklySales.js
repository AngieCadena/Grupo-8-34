import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 22;

export default function AppWeeklySales(props) {
  const {numEncuestas} = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="mdi:draw-pen" width={45} height={45} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(numEncuestas)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Numero de encuestas
      </Typography>
    </RootStyle>
  );
}
