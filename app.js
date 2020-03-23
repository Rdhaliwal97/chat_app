const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, "view")));

app.listen(port);
