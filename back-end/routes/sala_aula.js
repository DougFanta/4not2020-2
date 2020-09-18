const controller = require('../controllers/sala_aula')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)
router.get('/', controller.listar)
router.get('/:id', controller.ObterUm)
router.put('/', controller.atualizar)
router.delete('/', controller.excluir)

module.exports = router