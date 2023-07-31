const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const connectDatabase = require("./config/Mongodb")
const UserRouter = require("./routers/User")
dotenv.config();
connectDatabase();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", UserRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on ${process.env.PORT}`)
);