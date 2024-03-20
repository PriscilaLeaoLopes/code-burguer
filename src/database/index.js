const sequelize = require ("sequelize")


const  user = ("../app/models/user")

const  configDatabase = require ("../config/database")

const models = [User]

class Database {
     constructor(){
         this.init()
     }

     init(){
        this.connection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.connection))
     }
}


module.exports = new Database().app