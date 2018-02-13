const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;



module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'),
(req, res)=>{
  res.redirect('/');
});

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.post('/auth/local',passport.authenticate('local'),
    (req, res) => {


    res.json({msg:'OK', user:req.user})
    })
  ;

  app.get('/auth/facebook/callback', passport.authenticate('facebook'), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })

  const User = mongoose.model('users');
  app.post('/user/signup', (req, res, next) => {
    const user = new User();
    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.profile.picture = req.body.imageUrl;
    user.adress = req.body.adress;

    User.findOne({
      email: req.body.email
    }, (err, existingUser) => {
      if (existingUser)
        console.log(req.body.email + 'Email allready exsist');
      else {
        user.save((err) => {
          if (err)
            res.json({success:false , msg:'Failed To register user'})
            return next(err);
          res.json({success:true, msg:'successfully created new user!'});
        })
      }
    })

  });

  app.post('/user/signin', (req, res, next)=>{
    const password = req.body.password;
    const email = req.body.email;
    User.findOne({email: email},(err, user) =>{
       if (err) throw err;
       if(!user){ return res.json({success:false, msg:'User Not Found!'})}
       res.json({
         user:{
           id:user.id,
           email: user.email,
           adress:user.adress,
           name:user.profile.name,
           imageUrl:user.profile.picture
         }
       });
       console.log(req.user);
    });
});




}
