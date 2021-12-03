import { Schema, model } from "mongoose";

export const ROLES = ["estudiante", "admin", "profesor"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
