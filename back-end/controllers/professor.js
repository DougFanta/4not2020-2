const Professor = require("../models/Professor")

const controller = {}

controller.novo = async(req, res) => {
    //Usa os dados que chegam dentro do body da requisição
    //e os envia o BD para a criação de um novo objeto
    try{

    await Professor.create(req.body)
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
        let dados = await Professor.find()
        res.send(dados)
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Operação Retrive(one), função obterUm

controller.ObterUm = async (req,res) =>{
    const id = req.params.id
    let obj = await Professor.findById(id)

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
// Operação UPDATE, função atualizar
controller.atualizar = async(req, res) =>{
    try{
        // Isolar o _id que está sendo alterado
    const id = req.body._id

    // Busca a substituição do conteudo do objeto

    let ret = await Professor.findByIdAndUpdate(id, req.body)

    //Se encontrou a atualizou, retornamos HTTP 204: No content
    if(ret){
        res.status(204).end()
    }else{
        res.status(404).end()
    }
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }

}

controller.excluir = async(req, res) => {
    try{
        const id = req.body._id
        let ret = await Professor.findByIdAndDelete(id)
        if (ret){
            res.status(204).end()
        }
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller