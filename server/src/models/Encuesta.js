import { Schema, model } from "mongoose";

const encuestaSchema = new Schema(
    {
        calificacionTotalEncuesta: {
            type: Number,
            required: true,
        },
        promedioEstudiante: {
            type: Number,
            required: true,
        }
    },
  );
  
  export default model("Encuesta", encuestaSchema);