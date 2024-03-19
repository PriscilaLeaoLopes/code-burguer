
'use strict';

module.exports = {
 up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('users', { 
        id: {
            type: Sequelize.uuid,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull:false,
            unique: true,
        },
        password_hash: {
            type:Sequelize.STRING,
            allowNull:false,
        },
        admin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
             allowNull: false,
        },

        created_at: {
           type: Sequelize.DATE,
            allowNull: false,
        },

        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },


    })
},

down: async (QueryInterface) => {
     await QueryInterface.dropTable('users')

},
}