import React, {
  Component,
  createContext,
  createFactory,
  useState,
} from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import Header from "./navi/Header";
import Footer from "./navi/Footer";
import Profile from "./Profile";
import Sessions from "./Sessions";

class Dashboard extends Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div id="main-container" className="container">
          <div className="row">
            <div className="col-md-4">
              <Profile></Profile>
            </div>
            <div className="col-md-8">
              <Sessions onDelete={this.handleLogout}></Sessions>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Dashboard;
