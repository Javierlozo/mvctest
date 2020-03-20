const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const path = require("path");
const { routes } = require("./src/routes/routes");

const app = express();
const PORT = 5000;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://User:Oscar@jrscluster-vl8px.mongodb.net/projectjrs?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static("public"));

routes(app);

const start = () => {
  return app.listen(PORT, () => console.log(`server is running on ${PORT}`));
};

module.exports = { start };
