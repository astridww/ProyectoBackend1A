import express from "express"
import employeeController from "../controller/employeeController.js"
//Usamos de Express, su libreria Router()
//la cual tiene todos los métodos (get post put)

const router = express.Router()

router.route("/")
.get(employeeController.getEmployees)
.post(employeeController.insertEmployee)

router.route("/:id")
.put(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee)

export default router
