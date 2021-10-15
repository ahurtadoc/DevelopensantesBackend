const express = require('express')

const router = express.Router()

const userController =   require('../controller/user.controller');
const passport = require("passport");
const verifyUser = passport.authenticate('google', {failureRedirect: '../'})

router.get('/', userController.findAll);

router.post('/', userController.create);

router.delete('/:id', userController.delete);

router.get('/google', passport.authenticate('google', { scope: 'email' }));

router.get('/google/login', verifyUser, function (req, res) {
    if(req.body){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(req.body);
    }
}   )

module.exports = router;
