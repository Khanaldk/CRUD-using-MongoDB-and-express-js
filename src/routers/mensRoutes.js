const express=require('express');
const mensController = require('../mensController');
const validation = require('../middleware/validation');

const mensRoutes=express.Router();

mensRoutes.post('/mens',validation.MensRankingValidate,mensController.createMens);

mensRoutes.get('/mens',mensController.findallMensRanking);

mensRoutes.get('/:id',mensController.findMensRankingById);

mensRoutes.patch('/:id',mensController.updateMensRankingById);

mensRoutes.delete('/:_id',mensController.deleteMensRankingById);

module.exports=mensRoutes