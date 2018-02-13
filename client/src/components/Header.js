import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{

  renderHeader(){
    return(
      <ul class="navbar-nav  flex-row mr-auto">
    <li className="nav-item mr-4">
     <Link className="nav-link" to='/products' ><i className="fas fa-user"></i> Products </Link>

    </li>
    <li className="nav-item mr-4">
     <Link className="nav-link" to='/products' ><i className="fas fa-user"></i> About Us </Link>

    </li>
    <li className="nav-item mr-4">
     <Link className="nav-link" to='/products' ><i className="fas fa-user"></i> How It Work? </Link>

    </li>
    </ul>
    )
  }

  renderContent(){
    switch(this.props.auth){

      case null:
        return (
          <div className='row ml-auto'>


      <ul class="navbar-nav flex-row " >
          <li className="nav-item mr-4">
           <a className="nav-link" href='/login' ><i className="fas fa-sign-in-alt"></i>  Login </a>
          </li>
          <li className="nav-item mr-4">
           <a className="nav-link" href='/signup'><i className="fas fa-user-plus"></i> Signup </a>

          </li>
          <li className="nav-item mr-4">
           <a className="nav-link" href='/admin'>Admin </a>
          </li>
          </ul>

          </div>
        )
      case false:
        return 'log out'
      default:
        return (
          <div >


            <ul class="navbar-nav ">
          <li className="nav-item">
           <Link className="nav-link" to='/profile' ><i className="fas fa-user"></i> Profile </Link>

          </li>
          <li className="nav-item">
           <a className="nav-link" href='/' > <i className="fas fa-sign-out-alt"></i> Logout </a>
          </li>
          <li className="nav-item">
           <p> Hello , {this.props.auth.user.profile.name} </p>
          </li>
          </ul>
          </div>
        )
    }
  }

  render(){
    console.log('auth props',this.props.auth);
    return(
      <nav className="navbar  navbar-dark bg-dark ">
      <a className="navbar-brand " href='/'>Shushvinot</a>
      <div className='container'>
<div className='row justify-content-between'>

<div className=''>
    {this.renderHeader()}
</div>
<div className='mr-auto'>
          {this.renderContent()}
          </div>


          </div>
          </div>


      </nav>


    )
  }
}

function mapStateToProps({auth}){
  return {auth}
}



export default connect(mapStateToProps)(Header);
