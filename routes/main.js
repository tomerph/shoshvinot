const mongoose = require('mongoose');



module.exports = app => {

const User = mongoose.model('users');
const Product = mongoose.model('products');
app.get('/products/:id', (req,res,next) =>{
  Product.find({category:req.params.id})
  .populate('category')
  .exec((err, products) =>{
    if (err) return next(err);
    res.json(products);
  })
})

}
