const express = require('express');
const Router = express.Router();
const passport = require('passport');


Router.get('/google',passport.authenticate('google',{scope:['profile','email']}

));

Router.get('/google/callback',passport.authenticate('google', { failureRedirect: '/sss' }),function(req,res){
	res.redirect('/');
});


module.exports = Router;