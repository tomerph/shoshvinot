const mongoose = require('mongoose');
const {Schema} = mongoose;


const CategoriesSchema = new Schema({
  cat_name: {type:String, unique: true}
});

mongoose.model('category', CategoriesSchema);
