var dbConn = require('../../config/db.config');

var User = function(user){
    this.googleId = user.googleId;
    this.name = user.name;
    this.email = user.email;
    this.imageUrl = user.imageUrl;
}

User.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
            console.log(`user created ${res.insertId}`)
            result(null, res.insertId);
        }
    });
};

User.find = function (idUser, result) {
    dbConn.query("SELECT * FROM users WHERE googleId = ?", idUser, function (err, res, fields) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(`User finded ${res}`)
            result(err, res);
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
        console.log(`All users ${res}`);
        result(null, res);
        }
    });
};


User.delete = function (idUser, result) {
    dbConn.query("DELETE FROM users WHERE googleId = ?", idUser, function (err, res) {
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

// User.update = function(id, user, result){
//     dbConn.query("UPDATE users SET name=?,email=?,password=?,role=?,status=? WHERE googleId = ?",
//      [user.name,user.email,user.password,user.role, user.status, id], function (err, res) {
//     if(err) {
//       console.log("error: ", err);
//       result(null, err);
//     }else{
//       result(null, res);
//     }
//     });
// };

module.exports= User;
