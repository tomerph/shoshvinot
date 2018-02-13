import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteProd} from '../../../actions/index';
import {Link} from 'react-router-dom';


import _ from 'lodash';

class Product extends Component{
  constructor(props){
    super(props);
  }

  deleteproduct(){
    this.props.deleteProd(this.props.product.id);
    const index =  _.findIndex(this.props.products,(prod)=> {return prod._id == this.props.product._id});
    this.props.products.splice(index,1);

  }

  editprod(){
    console.log('id',this.props.product._id);
    const id = this.props.product._id;
  
  }

  render(){

    return(

      <div className="card" >
  <img className="card-img-top" src= {this.props.product.prod_image}  alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{this.props.product.prod_name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">{this.props.product.prod_price} $</p>

    <button className="btn btn-primary mr-2" onClick={this.editprod.bind(this)}><i className="far fa-edit"></i> Edit</button>

    <button className="btn btn-danger" onClick={this.deleteproduct.bind(this)}><i className="far fa-trash-alt"></i> Delete</button>
  </div>
</div>


    )
  }
}
 function mapStateToProps({products}){
   return {products}
 }



export default connect(mapStateToProps,{deleteProd})(Product);
