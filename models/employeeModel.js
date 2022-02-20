const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name can not be empty"],
      unique: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, "DOB can not be empty"],
    },
    gender: {
      type: String,
      required: [true, "Gender can not be empty"],
    },
    salary: {
      type: String,
      required: [true, "Salary can not be empty"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("employee", EmployeeSchema);
