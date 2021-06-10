const express = require('express');
const router = express();
const passport = require('passport')
require('./passport_setup')
const cookieSession = require('cookie-session')

//checks for session

global. isLoggedIn = (req, res, next) => {
  if (req.user) {
      next();
  } else {
      res.sendStatus(401);
  }
}


router.get('/sucess',isLoggedIn,(req,res)=>{
console.log("Sucessfully Logged In")
res.send('Sucessfully Logged In as ${req.user.email}!')
})

router.get('/failed',isLoggedIn,(req,res)=>{
    console.log("failed Logged In")
    res.send('failed  Logged In')
    })

router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }));



router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.redirect('/autherization/sucess')
  });

router.get('/logout',(req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/autherization/')
   })


module.exports = {loginStatus:isLoggedIn}
module.exports = router