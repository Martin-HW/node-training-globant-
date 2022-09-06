require("dotenv").config();
const Server = require("./models/server");

const myServer = new Server();
myServer.listen();
