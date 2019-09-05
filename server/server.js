const express = require("express");
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");
const quotesRoute = require("./routes/quotesRoute.js");
const app = express();
app.use(cors());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
hbs.registerPartials(path.join(__dirname, "../views", "partials"));
mongoose.connect("mongodb://localhost:27017/StarTrekQuotesDatabase");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.get("/", (req, res) => {
  res.redirect("/api/quotes");
})
app.use("/api/quotes", quotesRoute);
app.listen(3001);
