import React, {Component} from 'react';
import {connect} from 'react-redux';


import {Link} from 'react-router-dom';


import _ from 'lodash';

class ProductItem extends Component{
  constructor(props){
    super(props);
  }

  toProduct(){
    this.props.history.push(`/product/${this.props.product.id}`);
  }


  render(){

    return(

      <div className="card" onClick={this.toProduct.bind(this)}>
  <img className="card-img-top" src= {this.props.product.prod_image}  alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{this.props.product.prod_name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">{this.props.product.prod_price} $</p>

    <button className="btn btn-primary mr-2"><i className="far fa-edit"></i> Add To Cart</button>

  </div>
</div>


    )
  }
}
 function mapStateToProps({products}){
   return {products}
 }



export default connect(mapStateToProps,null)(ProductItem);
