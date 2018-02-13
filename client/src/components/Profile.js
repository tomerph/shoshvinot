import React, {Component} from 'react';
import {connect} from 'react-redux';


class Profile extends Component{

  render(){
    if(!this.props.auth){
      return(
        <h1>Profile Page </h1>
      )
    }
    return(
<h1>{this.props.auth.user.email}  </h1>
    )
  }
}


function mapStateToProps({auth}){
  {auth}
}

export default connect(mapStateToProps)(Profile);
