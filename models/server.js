const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');


class Server {

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.ip = process.env.IP_HOST;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(bodyparser.urlencoded({extended:false}))
    }

    routes() {
        this.app.use('/safi', require('../routes/safi-routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`http://${this.ip}:${this.port}/`);
        });
    }

}

module.exports = Server;