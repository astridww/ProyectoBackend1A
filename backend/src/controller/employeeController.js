//Creo un array de funciones
const employeeController = {};

//Import el modelo que voy a utilizar
import employeeModel from "../models/employees.js";

// SELECT
employeeController.getEmployees = async (req, res) => {
  const employees = await employeeModel.find();
  res.json(employees);
};

// INSERT
employeeController.insertEmployee = async (req, res) => {
  //#1- solicitar los datos
  const { name, lastName, salary, DUI, phone, email, password, idBranch } =
    req.body;
  //#2- Lleno mi modelo con esos datos que acabo de pedir
  const newEmployee = new employeeModel({
    name,
    lastName,
    salary,
    DUI,
    phone,
    email,
    password,
    idBranch,
  });
  //#3- Guardo todo en la base de datos
  await newEmployee.save();

  res.json({ message: "Employee saved" });
};

// ACTUALIZAR
employeeController.updateEmployee = async (req, res) => {
  //Solicito los datos
  const { name, lastName, salary, DUI, phone, email, password, idBranch } =
    req.body;
  //Actualizo
  await employeeModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      lastName,
      salary,
      DUI,
      phone,
      email,
      password,
      idBranch,
    },
    { new: true },
  );

  res.json({ message: "Employee updated" });
};

//Eliminar
employeeController.deleteEmployee = async (req, res) => {
  await employeeModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};

export default employeeController;
