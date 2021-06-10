const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {

  done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:8080/autherization/google/callback"
  },
  
  function(accessToken, refreshToken, profile, done) {
      
    console.log(profile)
    return done(null, profile);
  }
));