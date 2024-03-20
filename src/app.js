const express = require ("express")
const routes = require ("./routes.js")

const database = require ("./config/database.js")


class App {
    constructor() {
        this.app = express();
        
        this.middlewares();
        this.routes();
        
        
    }

    middlewares() {
       this.app.use(express.json());
    }

    routes() {
      this.app.use(routes);
    }
}

module.exports = new App().app
