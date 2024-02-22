const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Conneted to MongoDb"))

.catch(() => console.error("Could not connect to DB"));

app.use(express.json());

app.use("/api/auth",require("./routes/authRoutes"));

const PORT = process.env.PORT ||3000;

app.listen  (PORT, () => console.log("Server is Running is 3000 PORT"))
