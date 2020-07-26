import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {

  constructor(props){
    super(props);

    this.state = {

    }; // end of state

  } // end of constructor

  render() {

    // return the Menu Component
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src= {dish.image} alt={dish.name} />
            </Media>
            <Media body className = "ml-5">
              <Media heading> {dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });

    return(
      // return the layout component
      <div className="container">
        <div className = "row">
          <Media list>
            { menu } {/*this is where the menu item is construction */}
          </Media>
        </div>
      </div>
    );
  }

}

export default Menu;
