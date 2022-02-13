var express = require('express'),
    router = express.Router();
const Produit = require('../controllers/ produit_controller')
router
  .post('/', Produit.create)
  .get('/', Produit.findAll)
  .get('/:id', Produit.findOne)
  .patch('/:id', Produit.update)
  .delete('/:id', Produit.delete)
module.exports = router;