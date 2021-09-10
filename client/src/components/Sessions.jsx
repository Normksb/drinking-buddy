import { timers } from "jquery";
import React, { Component } from "react";
import Session from "./Session";

class Sessions extends Component {
  state = {};
  displaySessionButtons = () => {
    return (
      <div id="sessions-btns" className="w-100">
        <button
          onClick={this.props.inSession}
          className="btn btn-primary btn-md my-2 mr-2"
        >
          Start new session
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-md my-2 ml-2 float-right"
        >
          Logout
        </button>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        {!this.props.isInSession && this.displaySessionButtons()}
        {this.props.isInSession && (
          <Session cancelSession={this.props.outSession} />
        )}
      </React.Fragment>
    );
  }
}

export default Sessions;
