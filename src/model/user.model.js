var dbConn = require('../../config/db.config');

var User = function(user){
    this.id_user = user.id_user;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
    this.status = user.status;
} 

User.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
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

User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
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


User.delete = function (idUser, result) {
    dbConn.query("DELETE FROM users WHERE id_user = ?", idUser, function (err, res) {
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

User.update = function(id, user, result){
    dbConn.query("UPDATE users SET name=?,email=?,password=?,role=?,status=? WHERE id_user = ?",
     [user.name,user.email,user.password,user.role, user.status, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
};

module.exports= User;