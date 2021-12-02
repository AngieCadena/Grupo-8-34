import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/authentication/login';
import AuthSocial from '../components/authentication/AuthSocial';
import './profecionEstilos.css';
import Logo from '../components/Logo';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function Login() {
  const navigate = useNavigate();
  const abrirEncuesta = () => {
    navigate('/form', { replace: true });
  }

  const registroProfesor = () => {
    navigate('/create-teacher', { replace: true });
  }


  return (
    <div className="landing-page-container">
      <div>
        <h2>
            Eres Profesor?
        </h2>
        <Button
          color="inherit"
          variant="contained"
          className="green section-separate"
          onClick={registroProfesor}
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
            onClick={abrirEncuesta}
        >
            Responde una encuesta
        </Button>
      </div>
      <div className="image-override">
        <Logo/>
        <p>ProfeCión es una aplicación enfocada en generar un espacio en el que los estudiantes puedan hacer una evaluación sobre la calidad del cuerpo docente. De esta forma, la institución puede recibir una retroalimentación adecuada sobre los contenidos que se ofrecen, la calidad humana, integridad e idoneidad de sus profesores.</p>
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
