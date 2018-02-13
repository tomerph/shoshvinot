import React,{Component} from 'react';
import {connect} from 'react-redux';

import {allProd} from '../../actions/index';
import {getUsers} from '../../actions/index';



class Dashboard extends Component{
  componentWillMount(){
    this.props.getUsers();
    this.props.allProd();
  }

  renderUsers(){
    if(!this.props.users) return('')
  return (
    <div className="card text-white bg-secondary  m-3" >
  <div className="card-header"><i className="fas fa-users"></i> Users</div>
  <div className="card-body">
    <h5 className="card-title">{this.props.users.length}</h5>

  </div>
</div>
  );
  }

  renderProducts(){
    if(!this.props.products) return('')
    return(
      <div className="card text-white bg-success m-3" >
  <div className="card-header"><i className="fas fa-list-ol"></i> Products </div>
  <div className="card-body">
    <h5 className="card-title">{this.props.products.length}</h5>
  </div>
</div>
    )
  }

  render(){
    return(
      <div>
      <h1>Dashboard</h1>
      <div className='row'>
      <div className='col-md-4'>
      {this.renderUsers()}
      </div>
      <div className='col-md-4'>
      {this.renderProducts()}
      </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users:state.users,
    products:state.products
  }
}

export default connect(mapStateToProps,{allProd, getUsers})(Dashboard);
