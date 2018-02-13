// const Product = require('../models/Products');
const mongoose = require('mongoose');
const keys = require('../config/keys');


mongoose.connect(keys.mongooseURI);
const Product = mongoose.model('products');

var products = [
  new Product({
    image: 'http://www.prana.com/media/catalog/product/cache/1/image/2000x/040ec09b1e35df139433887a97daa66f/w/3/w3amel116_black_l_alt_9.jpg',
    title: 'Black Dress',
    description:'amazing dress',
    price: '30$'
  }),
  new Product({
    image: 'https://gloimg.drlcdn.com/L/pdm-product-pic/Clothing/2016/10/26/source-img/20161026155657_37147.jpg',
    title: 'Red Dress',
    description:'Great dress',
    price: '100$'
  }),
  new Product({
    image: 'https://cdn.forevernew.com.au/media/catalog/product/cache/1/back_image/333x440/9df78eab33525d08d6e5fb8d27136e95/2/4/24436602.jpg',
    title: 'Blue Dress',
    description:'Wow dress',
    price: '900$'
  })
]

for(var i = 0; i<products.length; i++){
  products[i].save().then(() =>{
    console.log('saved product');
  });
};
