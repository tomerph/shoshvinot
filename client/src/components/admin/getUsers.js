import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getUsers} from '../../actions/index';
import _ from 'lodash';


class GetUsers extends Component{
  componentWillMount(){
    this.props.getUsers();
  }
  renderUsers(){
    if(!this.props.users) return (<h3>Loading...</h3>);
    const users = _.map(this.props.users, (user)=>{
      return(
        <tr>

          <td scope="row">{user.profile.name}</td>
          <td>{user.email}</td>
          <td>{user.adress}</td>
        </tr>

      )
    })

    return users;

  }

  active(){
    if(!this.props.users) return('')
  return (<h4>Number of registered users: {this.props.users.length} </h4>);
  }

    render(){

    return(
      <div>
        {this.active()}
      <table class="table table-striped table-hover">
  <thead className='thead-dark'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Adress</th>

    </tr>
  </thead>
  <tbody >
  {this.renderUsers()}


  </tbody>
</table>
</div>
    )
}
}

function mapStateToProps({users}){
  return {users}
}

export default connect(mapStateToProps,{getUsers})(GetUsers);
