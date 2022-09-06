const express = require("express");
// const chalk = require("chalk");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("listening on port " + this.port);
    });
  }
}

module.exports = Server;
