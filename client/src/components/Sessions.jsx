import { timers } from "jquery";
import React, { Component } from "react";

class Sessions extends Component {
  render() {
    return (
      <div className="w-100">
        <button className="btn btn-primary btn-md my-2 mr-2">
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
  }
}

export default Sessions;
