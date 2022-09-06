const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.dogsPath = "/api/dogs";
    this.middlewares();
    this.routes();
    this.conectarDB();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.dogsPath, require("../routes/dogs"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(chalk.blue.underline.bold("listening on port " + this.port));
    });
  }
}

module.exports = Server;
