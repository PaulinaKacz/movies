import React from "react";
import ReactDOM from "react-dom";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return React.createElement(
      "div",
      { style: { color: "red", marginLeft: "60px" } },
      <div>
        <p>Current Count: {this.state.count}</p>
        <button className="inc" onClick={(e) => this.increment()}>
          Increment!
        </button>
        <button className="dec" onClick={(e) => this.decrement()}>
          Decrement!
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(Counter, { name: "Counter" }, null),
  document.querySelector("#root")
);
