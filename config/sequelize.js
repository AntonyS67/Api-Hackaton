const Sequelize = require('sequelize');
const sequelize = new Sequelize('hackaton','postgres','antonysilva123',{
    host:'localhost',
    dialect:'postgres'
});

module.exports = sequelize;