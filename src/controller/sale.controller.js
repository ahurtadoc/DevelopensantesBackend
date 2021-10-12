'use strict';

const Sale = require('../model/sale.model');


exports.create = function(req, res) {    
    const sale = new Sale(req.body);

    console.log("sale to insert", sale)

    Sale.create(sale, function(err, createdSale) {
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "Sale added sucessfully", data: createdSale});
        }
    });
}

exports.findAll = function(req, res) {

    Sale.findAll(function(err, sales) {

        console.log("in the controller");

        if (err) {
            res.send(err);
        } else {
            console.log("Finded: ", sales)
            res.send(sales);
        }
    });
}


exports.delete = function(req, res) {    
    const idSale = req.params.id;

    console.log("sale to delete", idSale)

    Sale.delete(idSale, function(err, deleteSale) {
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "Sale deleted sucessfully", data: deleteSale});
        }
    });
}

exports.update = function(req, res) {
    console.log("sale to update", req.params.id)

    Sale.update(req.params.id, new Sale(req.body), function(err, sale) {
     if (err) {
        res.send(err);
     } else {
        res.json({ error:false, message: 'Sale successfully updated' });
     }
    });
  
  }