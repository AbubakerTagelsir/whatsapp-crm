import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateCustomer from './components/create-customer';
import EditCustomer from './components/edit-customer';
import CustomersList from './components/list-customers';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">WhatsApp CRM</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">Campaigns</Link>
                </li>
                <li className="navbar-item">
                <Link to="/" className="nav-link">Customers</Link>
                </li>
                <li className="navbar-item">
                <Link to="/customer/create" className="nav-link">New Customer</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={CustomersList} />
          <Route path="/customer/edit/:id" component={EditCustomer} />
          <Route path="/customer/create" component={CreateCustomer} />
        </div>
      </Router>    );
  }
}

export default App;
