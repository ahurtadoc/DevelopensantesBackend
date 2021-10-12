'use strict';

const Product = require('../model/products.model');


exports.create = function(req, res) {    
    const product = new Product(req.body);

    console.log("product to insert", product)

    Product.create(product, function(err, createdProduct) {
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "Product added sucessfully", data: createdProduct});
        }
    });
}

exports.findAll = function(req, res) {

    Product.findAll(function(err, products) {

        console.log("in the controller");

        if (err) {
            res.send(err);
        } else {
            console.log("Finded: ", products)
            res.send(products);
        }
    });
}


exports.delete = function(req, res) {    
    const idProduct = req.params.id;

    console.log("product to delete", idProduct)

    Product.delete(idProduct, function(err, deleteProduct) {
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "Product deleted sucessfully", data: deleteProduct});
        }
    });
}


exports.update = function(req, res) {
    console.log("product to update", req.params.id)

    Product.update(req.params.id, new Product(req.body), function(err, product) {
     if (err) {
        res.send(err);
     } else {
        res.json({ error:false, message: 'Product successfully updated' });
     }
    });
  
  }