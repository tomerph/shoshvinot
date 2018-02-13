import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createUser} from '../actions/index';

class Signup extends Component{
  renderField(field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
      return(
        <div className={className}>
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
    console.log(values);
    this.props.createUser(values, ()=>{
        this.props.history.push('/login');
    });

  }


  render(){
    const {handleSubmit} = this.props;
    return (
        <div className='col-md-6'>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field type='email' label='Email' name='email' component={this.renderField}/>
          <Field type='password' label='Password' name='password' component={this.renderField}/>
          <Field type='text' label='Name' name='name' component={this.renderField}/>
          <Field type='text' label='imageURL' name='imageUrl' component={this.renderField}/>
          <Field type='text' label='adress' name='adress' component={this.renderField}/>

          <button type='submit' className='btn btn-primary'>Submit </button>
          <Link to='/' className='btn btn-danger' >Cancel </Link>

        </form>
        </div>

    )
  }
}

function validate(values){
const errors = {};

if(!values.email){
  errors.categories = 'Enter A Email!';
}
if(!values.password){
  errors.content = 'Enter A Password!';
}
//if errrors is empty , the form is fine to submit
// if errors has any property redux assums its invalid
return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostNewForm'
})(
  connect(null,{createUser})(Signup)
);
