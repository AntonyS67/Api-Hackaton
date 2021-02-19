const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const User = sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoincrement:true
    },
    nombres:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellidos:{
        type:DataTypes.STRING,
        allowNull:true
    },
    cui:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    longitud:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    latitud:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    telefono:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull:true
    },
    posta_id:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{timestamps:false});

module.exports = User;