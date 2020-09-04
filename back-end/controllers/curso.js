const Curso = require("../models/Curso")

const controller = {}

controller.novo = async(req, res) => {
    //Usa os dados que chegam dentro do body da requisição
    //e os envia o BD para a criação de um novo objeto
    try{

    await Curso.create(req.body)
    // HTTP 201: Created
    res.status(201).end()
    }catch(erro){
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }

}

module.exports = controller