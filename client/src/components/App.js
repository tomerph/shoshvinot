import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Admin from './admin/admin';

import ProductList from './products/product_list';
import SingleProduct from './products/single_product';


const Landing = () => <h2> Landing </h2>;

 class App extends Component {


render(){

    return(
      <BrowserRouter>
        <div>
          <Header />
          <div className='offset-md-1'>
          <Route path='/' exact  component ={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route exact path='/products' component={ProductList} />
          <Route path='/products/product/:id' component={SingleProduct} />

          <Route path='/admin' component={Admin} />
          </div>
      </div>

      </BrowserRouter>
    )
}
};



export default connect(null, actions)(App);
