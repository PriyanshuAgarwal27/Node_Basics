const express = require("express");
const fs = require("fs");
const app = express();

function logReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n ${Date.now()}:${req.ip} ${req.method} ${req.path}\n`,
      (err, data) => {
        console.log("Middleware 1st");
        next();
      }
    );
  };
}

module.exports = { logReqRes };
