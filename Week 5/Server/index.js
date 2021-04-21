const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

function main() {
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());

  app.all("/hello", async (req, res) => {
    const ms = req.body.ms || 5000;
    if (ms) {
      await wait(ms);
    }
    const name = req.body.name || req.params.name || req.query.name;
    const bin = fs.readFileSync(path.join("./static", name));

    res.end(bin);
  });

  app.listen(3000);
}

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

main();
