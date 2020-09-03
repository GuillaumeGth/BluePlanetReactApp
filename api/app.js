var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var messageRouter = require("./routes/message");
const path = require("path");

var app = express();
app.use(cors());

app.use(express.static(`${__dirname}/build`));
app.use("/test", function (req, res, next) {
  res.json({ result: "ok" });
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/message", messageRouter);
module.exports = app;
