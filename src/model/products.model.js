var dbConn = require('./../../config/db.config');

var Product = function(product){
    this.id_product = product.id_product;
    this.description = product.description;
    this.unit_price = product.unit_price;
    this.status = product.status;
} 

Product.create = function (newProduct, result) {
    dbConn.query("INSERT INTO products set ?", newProduct, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        console.log(res);
        result(null, res.insertId);
        }
    });
};

Product.findAll = function (result) {
    dbConn.query("Select * from products", function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        console.log('products : ', res);
        result(null, res);
        }
    });
};

Product.delete = function (idProduct, result) {
    dbConn.query("DELETE FROM products WHERE id_product = ?", idProduct, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        console.log(res);
        result(null, res);
        }
    });
};


Product.update = function(id, product, result){
    dbConn.query("UPDATE products SET description=?,unit_price=?,status=? WHERE id_product = ?",
     [product.description,product.unit_price,product.status, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
};

module.exports= Product;