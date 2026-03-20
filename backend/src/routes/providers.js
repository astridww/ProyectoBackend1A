import express from "express";
import providerController from "../controller/providersController.js";

//Usamos la función Router() de la libreria express
//para acceder a los métodos get, post, put, delete

const router = express.Router();

router.route("/")
.get(providerController.getProviders)
.post(providerController.insertProviders)

router.route("/:id")
.put(providerController.updateProvider)
.delete(providerController.deleteProvider)

export default router;