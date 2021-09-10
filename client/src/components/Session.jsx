import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Moment from "react-moment";
import moment from "moment";
import { QUERY_DRINKS } from "../utils/queries";

const Session = ({ cancelSession }) => {
  const [drinking, setDrinking] = React.useState(0);
  const [time, setTime] = React.useState({});
  const [timer, setTimer] = React.useState(0);
  const [ts, setTs] = React.useState(0);
  const [totaltime, setTotaltime] = React.useState(0);
  const [addDrink, setAddDrink] = React.useState(0);
  const { drinksLoading, drinksError, data } = useQuery(QUERY_DRINKS);

  useEffect(() => {
    let ts = moment().startOf("day");
    const drinktime = setInterval(function () {
      setTime(ts.add(1, "second"));
      setTimer(moment.utc(ts.seconds() * 1000).format("H:mm:ss"));
      setTotaltime(ts.seconds());
    }, 1000);
    return () => {
      clearInterval(drinktime);
      setDrinking(0);
      setTime(0);
      setTimer(0);
      setTotaltime(0);
    };
  }, []);

  const hAddDrink = () => {
    setAddDrink(1);
  };

  const handleAddDrink = () => {};

  return (
    <div id="drinking-session" className="my-4 text-center">
      <div id="drinking-session">
        <h3 className="timer">{timer}</h3>
        <button onClick={cancelSession} className="btn btn-danger btn-lg m-2">
          Stop Drinking
        </button>
        <button onClick={hAddDrink} className="btn btn-warning btn-lg m-2">
          Add a drink
        </button>
      </div>
      {addDrink === 1 && (
        <div className="add-drink">
          <form
            onSubmit={handleAddDrink}
            className="form-inline justify-content-center my-5"
          >
            <select
              name="drink"
              className="form-control form-control-md w-auto my-2 mr-sm-2 rounded-left"
            >
              {drinksLoading ? '<option value="" >Loading</option>' : ""}
              {drinksError ? '<option value="">Error</option>' : ""}
              {data
                ? data.drinks.map((drink) => (
                    <option key={drink} value={drink}>
                      {drink.Drink}
                    </option>
                  ))
                : ""}
            </select>
            <button type="submit" className="btn btn-primary my-2">
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Session;

/**
class Session extends Component {
  state = {
    drinking: 0,
    time: {},
    timer: 0,
    ts: 0,
    drinks: [
      {
        volume: 0,
        alc: 0,
      },
    ],
    displayAddDrink: 0,
  };
  theTimer = null;
  startTimer = () => {
    this.setState({ drinking: 1 });
    if (this.state.timer == 0) {
      let ts = moment().startOf("day");
      this.theTimer = setInterval(
        () =>
          this.setState({
            time: ts.add(1, "second"),
            timer: moment.utc(ts.seconds() * 1000).format("H:mm:ss"),
          }),
        1000
      );
    }
  };
  hStartDrinking = () => {
    this.startTimer();
  };
  hStopDrinking = () => {
    this.setState({ drinking: 0, time: {}, timer: 0, ts: 0 });
    clearInterval(this.theTimer);
  };
  hAddDrink = () => {
    this.setState({ displayAddDrink: 1 });
    let drinks = this.getDrinks();
  };
  displayAddDrink = () => {
    return (
      <div className="add-drink">
        <form className="form-inline justify-content-center my-5">
          <select
            name="drink"
            className="form-control form-control-md w-auto my-2 mr-sm-2 rounded-0 rounded-left"
          >
            {this.getDrinks}
          </select>
          <button type="submit" className="btn btn-primary my-2">
            Add
          </button>
        </form>
      </div>
    );
  };
  getDrinks = () => {
    const { loading, error, data } = useQuery(QUERY_DRINKS);
    if (loading) {
      return "Loading...";
    }
    if (error) {
      return error.message;
    }
    return data.drinks.map((drink) => (
      <option key={drink} value={drink}>
        {drink.Drink}
      </option>
    ));
  };
  render() {
    return (
      <div id="drinking-session" className="my-4 text-center">
        {this.state.drinking === 0 && (
          <div id="drinking-session-buttons">
            <button
              onClick={this.hStartDrinking}
              className="btn btn-primary btn-lg m-2"
            >
              Start Drinking
            </button>
            <button
              onClick={this.props.cancelSession}
              className="btn btn-secondary btn-lg m-2"
            >
              Cancel
            </button>
          </div>
        )}
        {this.state.drinking === 1 && (
          <div id="drinking-session">
            <h3 className="timer">{this.state.timer}</h3>
            <button
              onClick={this.hStopDrinking}
              className="btn btn-danger btn-lg m-2"
            >
              Stop Drinking
            </button>
            <button
              onClick={this.hAddDrink}
              className="btn btn-warning btn-lg m-2"
            >
              Add a drink
            </button>
          </div>
        )}
        {this.state.displayAddDrink === 1 &&
          this.state.drinking === 1 &&
          this.displayAddDrink()}
      </div>
    );
  }
}

export default Session;
**/
