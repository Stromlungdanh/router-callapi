import React, { Component } from "react";
import About from "./About";
import Product from "./Product";
import NotFound from "./NotFound";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/about"
                    activeStyle={{ backgroundColor: "white", color: "red" }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/product"
                    activeStyle={{ backgroundColor: "white", color: "red" }}
                  >
                    Product
                  </NavLink>
                </li>
              </ul>
            </div>
            <form className="form-inline">
              <button className="btn btn-outline-success" type="button">
                <NavLink className="nav-link" to="/login">
                  Đăng nhập
                </NavLink>
              </button>
            </form>
          </nav>
        </div>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/product" component={Product} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
