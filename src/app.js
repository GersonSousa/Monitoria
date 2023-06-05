const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/Views");

app.use("/", require("./Routes/FormularioRouter"));

module.exports = app;
