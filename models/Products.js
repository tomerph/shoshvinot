const mongoose = require('mongoose');
const {Schema} = mongoose;


const ProductSchema = new Schema({
  category: {type: Schema.Types.ObjectId, ref:'category'},
  prod_name:String,
  prod_price: Number,
  prod_image: String,
  prod_description: String
});

mongoose.model('products', ProductSchema);
