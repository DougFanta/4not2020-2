const mongoose = require('mongoose')

const esquema = mongoose.Schema({
      nome:{
          type: String, 
          required:true
      },
      data_inicial:{
          type: Date,
          required: true
      },
      data_final:{
          type:String,
          required:true,
          validator: function(valor){
              return valor >= this.data_inicial
          }
      },
      dias_semana:[{
          type:String,
          required: true,
          enum:["dom", "seg", "ter", "qua", "qui", "sex", "sab"]
      }],
      curso:{
          type: mongoose.ObjectId,
          ref: "Curso",
          required:true
      },
      professor:{
          type: mongoose.ObjectId,
          ref: "Professor",
          required: true
      },
      sala_aula:{
          type: mongoose.ObjectId,
          ref: "SalaAula",
          required: true
      }
})

module.exports = mongoose.model('Turma', esquema, 'turma')