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
  state = {
    isInSession: 0,
  };
  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  hNewSession = () => {
    this.setState({ isInSession: 1 });
  };
  hCancelSession = () => {
    this.setState({ isInSession: 0 });
  };

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div id="main-container" className="container">
          <div className="row">
            <div className="col-md-12">
              <Profile isInSession={this.state.isInSession}></Profile>
            </div>
            <div className="col-md-12">
              <Sessions
                onDelete={this.handleLogout}
                isInSession={this.state.isInSession}
                inSession={this.hNewSession}
                outSession={this.hCancelSession}
              ></Sessions>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Dashboard;
