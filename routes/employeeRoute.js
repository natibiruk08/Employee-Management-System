const router = require("express").Router();
const employeeController = require("../controllers/employeeController");

//CREATE EMPLOYEE

router.post("/", employeeController.add);

//UPDATE

router.put("/:id", employeeController.update);

//DELETE

router.delete("/:id", employeeController.delete);

//GET SINGLE EMPLOYEE

router.get("/:id", employeeController.getEmployee);

//GET ALL EMPLOYEES

router.get("/", employeeController.getAllEmployees);

module.exports = router;
