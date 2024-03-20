const  { Model } = require("sequelize") 



class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                passoword_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,

            },
            {
                sequelize,
            }
        )
            
    }
    
}

module.exports = User
