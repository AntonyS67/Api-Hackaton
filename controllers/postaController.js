const Posta = require("../models/postaModel");
const {calculateDistance} = require('../helpers/calculate');
const {calculatelesserId} = require('../helpers/calculate');

exports.getPostas = async (req,res) => {
    try {
        const postas = await Posta.findAll();
        res.send(postas);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

exports.create = async (req,res) => {
    try {
        const posta = await Posta.create(req.body,{fields:['nombre','longitud','latitud','direccion']});
        if(posta){
            res.status(200).send({message:'Posta creada',data:posta});
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

exports.getPosta = async (req,res) => {
    try {
        const postaId = req.params.id;
        const posta = await Posta.findByPk(postaId);
        if(!posta){
            return res.status(404).send({message:'Posta no encontrada'});
        }
        return res.send(posta);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

exports.updatePosta = async (req,res) => {
    try {
        const postaId = req.params.id;
        const posta = Posta.findByPk(postaId);
        if(!posta){
            return res.status(404).send({message:'Posta no encontrada'});
        }
        const updatePosta = await Posta.update({
            nombre:req.body.nombre,
            longitud:req.body.longitud,
            latitud:req.body.latitud,
            direccion:req.body.direccion
        },{where:{id:postaId}})

        if(updatePosta){  
            return res.status(200).send({message:'Posta acutalizada'});    
        }
        
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

exports.deletePosta = async (req,res) => {
    try {
        const postaId = req.params.id;
        const posta = Posta.findByPk(postaId);
        if(!posta){
            return res.status(404).send({message:'Posta no encontrada'});
        }
        await Posta.destroy({
            where:{id:postaId}
        });
        res.send({message:'Posta eliminada'});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}


exports.getPostaCloser = async (req,res) => {
    try {
        const postas = await Posta.findAll();
        let distances = [];
        let distance;
        if(postas){
            postas.map(posta => {
                distance = calculateDistance(req.body.longitud,req.body.latitud,posta.longitud,posta.latitud);
                distances.push({id:posta.id,distance})
            });
        }
        let menorId = calculatelesserId(distances);
        const postaCloser = await Posta.findOne({where:{id:menorId}});
        res.send({message:'Posta mas cercana',data:postaCloser})
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}