const Employee = require("../models/employeeModel");

//CREATE NEW EMPLOYEE
exports.add = async (req, res) => {
  try {
    const newEmployee = new Employee({
      name: req.body.name,
      dateOfBirth: req.body.name,
      gender: req.body.name,
      salary: req.body.name,
    });
    //SAVE NEW EMPLOYEE

    await newEmployee
      .save()
      .then(() => res.status(200).json(newEmployee))
      .catch((err) => res.status(500).json(err));
  } catch (error) {
    res.send(error);
  }
};

//UPDATE EMPLOYEE

exports.update = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.send(error);
  }
};

//DELETE EMPLOYEE

exports.delete = async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  try {
    await employee.delete();
    res.status(200).json("Employee has been deleted...");
  } catch (err) {
    res.send(err);
  }
};

//GET A SINGLE EMPLOYEES

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL EMPLOYEES

exports.getAllEmployees = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json(err);
  }
};
