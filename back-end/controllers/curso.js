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

//operação retrive (all) função listar
controller.listar = async (req,res) =>{
    try{
        let dados = await Curso.find()
        res.send(dados)
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Operação Retrive(one), função obterUm

controller.ObterUm = async (req,res) =>{
    const id = req.params.id
    let obj = await Curso.findById(id)

    try{
        if(obj){
            res.send(obj)
        }else{
            res.status(404).end()
        }
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}
module.exports = controller