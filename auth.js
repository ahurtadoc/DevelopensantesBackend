const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('./config')
const User = require("./src/model/user.model");

passport.serializeUser(User);

passport.deserializeUser(User);

exports.googlePassport = passport.use(new GoogleStrategy({
        clientID: config.google.clientId,
        clientSecret: config.google.client_secret,
        callbackURL: config.google.callbackUrl,
        // passReqToCallback: true
    },
    function(accessToken, refreshToken, profile, done) {
        const {
            sub: googleId,
            name: name,
            picture: imageUrl,
            email: email,
        } = profile._json;
        User.find(googleId, function (err, user){
            if(err){
                console.log(err)
                return done(err, user)
            }else if(user.length){
                console.log(user.length)
                return done(err, user[0].row)
            }else{
                const user = {
                    googleId,
                    name,
                    imageUrl,
                    email,
                };
                User.create( user , function (err, user) {
                    return done(err, user);
                });
            }
        })
    }
));

