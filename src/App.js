import React, { Component } from "react";
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import './App.css';
import { DISHES } from "./shared/dishes"

class App extends Component {

  // define state
  constructor(props) {
    super(props);

    // chuck in the state data you imported above to a local var
    this.state = {
      dishes: DISHES
    };

  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">hello Gil</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} /> {/* hello here*/}
      </div>
    );
  }
}

export default App;
