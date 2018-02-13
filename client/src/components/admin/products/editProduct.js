import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import {addCat} from '../../../actions/index';
import {getCat} from '../../../actions/index';




class EditProduct extends Component{

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
  componentWillMount(){
    this.props.getCat();
  }

  renderCat(field) {
    console.log('fieldOptions',field.options );
      const cat = _.map(field.options, (cats) => {
        return (
          <option key={cats._id} value={cats._id}>{cats.cat_name}</option>
        )
      });

      console.log('catssss',cat);

      return (
        <div className='form-group'>
        <label>{field.label} </label>
          <select className='form-control' onChange={field.input.onChange}>
        <option></option>
          {cat}
            </select>
            </div>
      );
    }


  onSubmit(values){



  }


    render(){
      const {handleSubmit} = this.props;

      return (
          <div className='col-md-6'>
          <h3>Edit Product</h3>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <Field type='select' label='Category' options={this.props.cat} name='cat_id' component={this.renderCat} />
            <Field type='text' label='Product Name' name='prod_name'  placeholder = 'sfsfssf'  component={this.renderField} />
            <Field type='number' label='Price' name='prod_price' component={this.renderField} />
            <Field type='text' label='Image' name='prod_image' component={this.renderField} />



            <button type='submit' className='btn btn-primary'>Add </button>


          </form>
          </div>

      )
    }
}

function mapStateToProps(state){
  return {auth:state.auth,
    cat: state.cat}
}
export default reduxForm({

  form: 'addProduct'
})(
  connect(mapStateToProps, { getCat})(EditProduct)
);
