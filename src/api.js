const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const serverless = require("serverless-http");
const router = express.Router();
const data = require("/db.js");

app.use(express.json());
app.use(cors());

// routes
router.get("/", (req, res) => {
  res.status(200).json(data);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
