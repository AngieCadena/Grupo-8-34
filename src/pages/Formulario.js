import React from "react";
import {Form,  Button} from "react-bootstrap";
import Page from '../components/Page';

function Formulario() {
    return (
        <div>
            
<Form>
            <Form.Group className="mb-3" >
            <Form.Label>Cédula del estudiante</Form.Label>
            <Form.Control type="text" placeholder="Cédula del estudiante" />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Nombre del (la) profesor (a)</Form.Label>
            <Form.Control type="text" placeholder="Nombre del (la) profesor (a)" />
            </Form.Group>
            <Form.Label>Para las preguntas que se encuentran a continuación, por favor califique de 1 a 5, teniendo en cuenta que 1 es totalmente en desacuerdo y 5 es totalmente de acuerdo.</Form.Label>
            <Form.Label>1. El (la) profesor (a) conoce y maneja los temas tratados en clase.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
             </div>
  ))}
  <Form.Label>2. El (la) profesor (a) utiliza recursos diferentes para dar las explicaciones, tales como videos, presentaciones, actividades, etc..</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>
  ))}
  <Form.Label>3. El (la) profesor (a) genera espacios de debate en los que los estudiantes pueden expresarse libremente</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>
  ))}
  <Form.Label>4. El (la) profesor (a) responde las preguntas que se le formulan.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>))}
    <Form.Label>5. El (la) profesor (a) es respetuoso en el trato hacia sus estudiates.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>))}
    <Form.Label>6. El (la) profesor (a) establece fechas límite de entrega en común acuerdo con los estudiantes.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>))}
    <Form.Label>7. El (la) profesor (a) cumple sus horarios de clase con puntualidad.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>))}
    <Form.Label>8. El (la) profesor (a) motiva a sus estudiantes.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>))}
    <Form.Label>9. El (la) profesor (a) busca diversas metodologías de enseñanza acordes con las metodologías de aprendizaje de sus estudiantes.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>))}
    <Form.Label>10. Volvería a tomar un curso con este (a) profesor (a).</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>))}
   <Button type="submit">Enviar respuestas</Button>
          </Form>
    </div>
      )
  }
  
  export default Formulario