const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/api/bands", cors(), (req, res) => {
  res.status(200).sendFile("./public/db.json", { root: __dirname });
});

app.listen(process.env.PORT || 4000, () =>
  console.log("Server Is Up And Running")
);
