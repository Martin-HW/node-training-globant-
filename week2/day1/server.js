const express = require("express");
const chalk = require("chalk");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.dogsPath = "/api/dogs";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.dogsPath, require("./routes/dogs"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(chalk.blue.underline.bold("listening on port " + this.port));
    });
  }
}

module.exports = Server;
