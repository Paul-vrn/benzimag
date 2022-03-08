var express = require('express'),
    router = express.Router();
const Commande = require('../controllers/commande_controller')
const checkTokenMiddleware = require('./middleware').checkTokenMiddleware;
router
  .post('/', Commande.create)
  .get('/', Commande.findAll)
  .get('/:id', Commande.findOne)
  .patch('/:id', checkTokenMiddleware, Commande.update)
  .delete('/:id', checkTokenMiddleware, Commande.delete)
module.exports = router;