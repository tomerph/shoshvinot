const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });

});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {

  User.findOne({googleId: profile.id}).then((existingUser) => {
    if(existingUser){
      done(null,existingUser );
    }else{
      new User({
        googleId: profile.id,
        googlePhoto: profile.photos[0].value,
        name:profile.displayName
      }).save()
      .then(user => {
        done(null,user);
      })
    }
  })


}));


passport.use(new FacebookStrategy({
    clientID: keys.facebookClientId,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "http://localhost:5000/auth/facebook/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log('access Token', accessToken);
    console.log('refresh Token', refreshToken);
    console.log('profile', profile);
    new User({
      facebookId: profile.id,
      name: profile.displayName
    }).save();

  }
));

passport.use('local',new LocalStrategy(
  function(email, password, done) {

    User.findOne({ email: email }, function (err, user) {
      if (err) { return done('error'); }
      if (!user) { return done(null, false, {message: 'Cant Find User'}); }

        user.comparePassword(password, user.password, (err,isMatch)=>{
        if(err) throw err;
        if(!isMatch) {
          return done(null, false, {message: 'Invalid Passsword'});
        }
        console.log(user.id);
            return done(null, user)
      })

      // console.log(req.user)
      // return done(null, user);
    });
  }
));



// exports.isAuthenticated = function(req,res, next){
//   if(req.isAuthenticated()){
//     next();
//   }
//
// }
