const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const mainRoute = require("./src/routes/mainRoute");
const helpers = require("./src/config/helpers");
const compression = require("compression");

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/src/views/layouts",
    partialsDir: __dirname + "/src/views/partials",
    helpers: {
      pageHeaderVid: helpers.pageHeaderVid,
      pageHeaderImg: helpers.pageHeaderImg,
    },
  })
);
app.set("views", __dirname + "/src/views");

app.use("/", mainRoute);
app.listen(8000);
