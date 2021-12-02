import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography, Button } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import AuthSocial from '../components/authentication/AuthSocial';
import './profecionEstilos.css';
import Logo from '../components/Logo';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function Login() {
  return (
    <div className="landing-page-container">
      <div>
        <Logo/>
      </div>
      <div>
        <h2>
            Eres Profesor?
        </h2>
        <Button
          color="inherit"
          variant="contained"
          className="green section-separate"
        >
          Incríbete
        </Button>
        <h2 >
              Eres estudiante?
            </h2>
        <Button
            color="inherit"
            variant="contained"
            className="green"
        >
            Crea una Encuesta
        </Button>
      </div>
      <div>
        <h2>
            Eres coordinador?
        </h2>
        <AuthSocial />
        <LoginForm />
      </div>

    </div>
  );
}
