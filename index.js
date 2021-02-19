const express = require('express');
const cors = require('cors');
const conectDB = require('./config/config');

const app = express();
conectDB();

app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
    res.header("Content-type","multipart/form-data")
    next();
});

app.use(cors());

//Parsear el body usando body parser
app.use(express.json()); // body en formato json
app.use(express.urlencoded({ extended: true })); //body formulario

app.use('/api/postas',require('./routes/postaRoutes'));
app.use('/api/users',require('./routes/userRoutes'));

app.listen(5000,() => {
    console.log('Server Iniciado en puerto 5000');
});