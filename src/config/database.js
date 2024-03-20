const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('codeburguer', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = sequelize;
