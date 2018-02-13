import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Product from './product';

import {allProd} from '../../../actions/index';
class Products extends Component{
  componentWillMount(){
    this.props.allProd();
  }

  products(){

    if(!this.props.products) return (<h3> Loading....</h3>);
    console.log('all',this.props.products);
    const products = _.map(this.props.products, (prod) =>{
      return (

        <div className='col-md-4'>
        <Product key={prod.prod_name} product={prod} />
      </div>
    )

    })


return products;

  }



  render(){

    return(
      <div>
      <h1>Products</h1>
        <div className='row'>
      {this.products()}
      </div>
      </div>
    )
  }
}

function mapStateToProps({products}){
  return {products}
}

export default connect(mapStateToProps,{allProd})(Products);
