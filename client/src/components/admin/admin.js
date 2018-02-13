import React, {Component} from 'react';
import {connect} from 'react-redux';
import Add from './add';
import Side from './Side';
import getUsers from './getUsers';
import Products from './products/products';
import EditProduct from './products/editProduct';


import Dashboard from './dashboard';

import { BrowserRouter, Route} from 'react-router-dom';



class Admin extends Component{

  render(){

    return(
      <BrowserRouter>
        <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-1 '>
          <Side />
          </div>
          <div className='col-md-10 mt-2 offset-md-1' >
          <Route path='/admin/dashboard' exact  component ={Dashboard} />
          <Route path='/admin/add' exact  component ={Add} />
          <Route path='/admin/getusers' exact  component ={getUsers} />
          <Route path='/admin/products' exact  component ={Products} />
            <Route  path='/admin/edit-product/:id' exact  component ={EditProduct} />

          </div>
      </div>
      </div>

      </BrowserRouter>
    )
  }
}

export default connect(null)(Admin);
