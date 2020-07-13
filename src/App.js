import React, { Component } from "react";
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">hello Gil</NavbarBrand>
          </div>
        </Navbar>
        <Menu /> {/* hello here*/}
      </div>
    );
  }
}

export default App;
