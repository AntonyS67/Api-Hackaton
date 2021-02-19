const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { getToken } = require('../helpers/util');

exports.getUsers = async (req,res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

exports.create = async (req,res) => {
    try {
        const user = await User.findOne({cui:req.body.cui});
        if(user){
            return res.status(401).send({message:'Usuario ya existe'});
        }
        req.body.password = await bcrypt.hash(req.body.password,10)
        const newUser = await User.create(req.body,{fields:['nombres','apellidos','cui','longitud','latitud','email','password','telefono','direccion','posta_id']});
        if(newUser){
            res.status(200).send({
                newUser,
                token:getToken(newUser)
            });
        }else{
            res.status(401).send({message:'Datos incorrectos'});
        }
        res.send(newUser);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

exports.signinUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            const isSame = await bcrypt.compare(password,user.password);
            if(isSame){
                res.send({
                    user,
                    token:getToken(user)
                });
            }else{
                res.status(401).send({message:'Email o contraseña invalidos'})
            }
        }else{
            res.status(401).send({message:'El usuario no existe'})
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}