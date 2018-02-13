const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');

// the user schema
const UserSchema = new Schema({
  googleId: String,
  facebookId:String,
  email: {type: String},
  password: String,

  profile: {
    name:{type: String, default:''},
    picture: {type:String, default:''}
  },

  adress:String,
  history:[{
    date: Date,
    paid:{type:Number, default:0},
    //item: {type:Schema.Types.ObjectId, ref:''}
  }]

});



// hash the password before saving

UserSchema.pre('save', function(next){
  var user = this;
  if(!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt){
    if(err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if(err) return next(err);
      user.password = hash;
      next();
    })
  });
});

//compare password

UserSchema.methods.comparePassword = function (candidatePassword, hash, callback){
  return bcrypt.compare(candidatePassword, hash , function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}

mongoose.model('users', UserSchema);
