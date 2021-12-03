import { Router } from "express";
const router = Router();

import * as profesorCtrl from "../controllers/profesor.controller";
import { authJwt } from "../middlewares";

router.get("/", profesorCtrl.getProfesores);

router.get("/:profesorId", profesorCtrl.getProfesorById);

router.get("/getprofesoresencuesta", profesorCtrl.getProfesoresWithoutPrivilegies);

router.post(
  "/",
  //[authJwt.verifyToken, authJwt.isAdmin],
  profesorCtrl.createProfesor
);

router.put(
  "/:profesorId",
  //[authJwt.verifyToken, authJwt.isProfesor],
  profesorCtrl.updateProfesorById
);

router.put(
  "/crearencuesta/:profesorId",
  profesorCtrl.crearEncuesta
),

router.delete(
  "/:profesorId",
  [authJwt.verifyToken, authJwt.isAdmin],
  profesorCtrl.deleteProfesorById
);

export default router;
