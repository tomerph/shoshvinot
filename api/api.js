const async = require ('async');
const faker = require ('faker');
const mongoose = require('mongoose');


module.exports = app => {

    const Category = mongoose.model('category');
    const Product = mongoose.model('products');

    app.get('/:name', (req,res,next) =>{
      async.waterfall([
        function(callback){
          Category.findOne({cat_name: req.params.name}, (err, category) =>{
            if(err) return next(err);
             callback(null, category)
          })

        },

        function(category,callback){
          for(var i = 0; i<10; i++){
          const product = new Product();
          product.category = category.id;
          product.prod_name = faker.commerce.productName();
          product.prod_price = faker.commerce.price();
          product.prod_image = faker.image.image();

          product.save();
          }

      }
      ])

      res.json({msg:'successfuly adding products!'})
    })

}
