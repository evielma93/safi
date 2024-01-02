require('dotenv').config();

const serverClass = require('./models/server');

const server = new serverClass();


server.listen();