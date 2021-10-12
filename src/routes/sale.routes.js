const express = require('express')

const router = express.Router()

const saleController =   require('../controller/sale.controller');

router.get('/', saleController.findAll);

router.post('/', saleController.create);

router.delete('/:id', saleController.delete);

router.put('/:id', saleController.update);


module.exports = router;