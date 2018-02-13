import React,{Component} from 'react';

import {connect} from 'react-redux';

class SingleProduct extends Component{

  render(){
    return (
      <h1>Single Product</h1>
    )
  }
}

export default connect()(SingleProduct);
