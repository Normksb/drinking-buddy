import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header-nav">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <img
              src="/images/dlogo-hor-340.png"
              alt="Drinking Buddy,  your drinking companion"
              className="text-center img-responsive"
              id="logo"
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
