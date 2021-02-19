const jwt = require('jsonwebtoken');
require('dotenv').config({path:'.env'});

const getToken = user => {
    return jwt.sign({
        id:user.id,
        nombre:user.nombre,
        email:user.email
    },process.env.JWT_SECRET,{
        expiresIn:'48h'
    })
}

module.exports = {getToken}