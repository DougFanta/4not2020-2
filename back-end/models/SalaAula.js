const mongoose = require('mongoose')

const esquema = mongoose.Schema({
      nome:{
          type: String, 
          require:true
      },
      capacidade:{
          type: Number,
          default: 20
      },
      recursos_didaticos:{
          type: String
      }

})

module.exports = mongoose.model('SalaAula', esquema, 'salas_aula')