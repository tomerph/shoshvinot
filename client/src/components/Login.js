import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {loginUser} from '../actions/index';


class Login extends Component{

  renderField(field){

      return(
        <div className='form-group'>
        <label>{field.label} </label>
          <input
            type={field.type}
            {...field.input}
            className='form-control'
            />
            <div className='text-help'>
            {field.meta.touched ? field.meta.error : ''}
            </div>
        </div>
      )
  }
  onSubmit(values){

    this.props.loginUser(values, () =>{
      this.props.history.push('/');
    });

  }

  componentWillMount(){
    if(this.props.auth){
        this.props.history.push('/');
    }
  }
    render(){
      const {handleSubmit} = this.props;

      return (
          <div className='col-md-6'>
          <h3>Sign Up</h3>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <Field type='email' label='Email' name='username' component={this.renderField}/>
            <Field type='password' label='Password' name='password' component={this.renderField}/>


            <button type='submit' className='btn btn-primary'>Submit </button>
            <Link to='localhost:5000/auth/google' className='btn btn-danger' >Login with GOOGLE+ </Link>

          </form>
          </div>

      )
    }
}

function mapStateToProps({auth}){
  return {auth}
}
export default reduxForm({

  form: 'PostNewForm'
})(
  connect(mapStateToProps,{loginUser})(Login)
);
