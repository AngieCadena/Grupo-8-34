import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent,  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/authentication/login';
import { CreateTeacher } from '../pages/CreateTeacher';
import AuthSocial from '../components/authentication/AuthSocial';
import './profecionEstilos.css';
import Logo from '../components/Logo';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function Login() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const abrirEncuesta = () => {
    navigate('/form', { replace: true });
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
          onClick={handleOpen}
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inscribete en ProfeCión</DialogTitle>
        <DialogContent>
          <CreateTeacher submitCallback={handleClose}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
