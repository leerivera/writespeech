const express = require('express');
const app = express();
const mongoose = require("mongoose");

const connectDB = require("./config/database")

const mainRoutes = require("./routes/main")
const postRoutes = require("./routes/posts")

//.env file in config folder
require("dotenv").config({ path: "./config/.env"});

// database connect

connectDB();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//Routes
app.use("/", mainRoutes);
app.use("/post", postRoutes);

const PORT = process.env.port || 3000
app.listen(PORT, () => {
    console.log("Server is going")
})