import React, {Component} from 'react';

class Side extends Component {

  render() {
    return (<nav className=" navbar-dark bg-dark  sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/admin/dashboard">

              <i className="fas fa-tachometer-alt"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">

              <i className="fas fa-file-alt"></i> Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseProducts">

              <i className="fas fa-list-ol"></i> Products
            </a>
          </li>
          <ul className="sidenav-second-level collapse" id="collapseProducts">
            <li>
              <a href="/admin/products">Get All Products</a>
            </li>
            <li>
              <a href="/admin/add">Add Product</a>
            </li>
          </ul>


          <li className="nav-item">
            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseCust">
            <i className="fas fa-users"></i> Customers
            </a>
          </li>

          <ul className="sidenav-second-level collapse" id="collapseCust">
            <li>
              <a href="/admin/getusers">All Custumers</a>
            </li>
            <li>
              <a href="#">Find Customer</a>
            </li>
          </ul>

        </ul>

      </div>
    </nav>)
  }
}

export default Side;
