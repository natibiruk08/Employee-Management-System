const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const employeeRoute = require("./routes/employeeRoute");

dotenv.config();
app.use(express.json());

app.listen(process.env.PORT || "5000", () => {
  console.log("backend is running");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/api/employee", employeeRoute);
