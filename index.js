const express = require('express');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const BodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require ('connect-flash');
const cors = require('cors');

const api = require('./api/api');



require('./models/User');
require('./models/Products');
require('./models/categories');


require('./services/passport');

mongoose.connect(keys.mongooseURI, function(err){
  if(err) return console.log(err);
  console.log('Connected to database!');
});

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cookieSession({
    maxAge: 30* 24 *60 *60 *1000,
    keys: [keys.cookieKey]
  })
);
app.use(cookieParser());
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(flash());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())



authRoutes(app);
adminRoutes(app);
api(app);
mainRoutes(app);

app.listen(PORT, () => {
  console.log('server running on port ' + PORT);
});
