const mongoose = require('mongoose');



module.exports = app => {


  const Category = mongoose.model('category');
  app.post('/add-category', (req, res , next) =>{
      const cat = new Category();
      cat.cat_name = req.body.cat_name;

      cat.save((err) =>{
        if(err) return next(err);

        return res.json('Added category!')
      })
  });

  app.get('/get-category', (req,res,next) =>{
    Category.find({}, (err, cat) =>{
      if (err) return next(err);
      res.json(cat);
    })
  })

  const User = mongoose.model('users');
  app.get('/all-users', (req, res , next) => {
    User.find({}, (err , users) => {
      if(err) return next(err);
      res.json(users);
    })
  })



  const Product = mongoose.model('products');
app.post('/add-product', (req,res,next) =>{
  const product = new Product();
  // const catName = Category.findOne({id: req.body.cat_name}, (err, cat) =>{
  //   if(err) return err;
  //   return next(null, cat);
  // });
  product.category = req.body.cat_id;

  product.prod_name = req.body.prod_name;
  product.prod_price = req.body.prod_price;
  product.prod_image = req.body.prod_image;

  product.save((err)=>{
    if (err){
      res.json({success:false , msg:'Failed To Add product'})
    return  next(err);
    }

    res.json({success:true, msg:'Product added successfuly'});

  })

})

app.get('/all-products', (req,res,next) =>{
  Product.find({}, (err, products) =>{
    if (err) return next(err);
    res.json(products);
  })
})


app.delete('/delete-product', (req,res, next)=>{
  Product.findOne({id:req.body.id}, (err,product)=>{
    if (err) return next(err);
    product.remove();
    res.json({msg:'product remove successfuly', p:product})
  })
})

}
