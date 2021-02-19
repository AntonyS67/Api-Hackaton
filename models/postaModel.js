const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const Posta = sequelize.define('postas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoincrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    longitud:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    latitud:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{timestamps:false});

module.exports = Posta;