import React from "react";
import { Component } from "react";
import { Rating } from "react-simple-star-rating";

//stars rating

class ResetRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ value: undefined });
  }

  render() {
    return (
      <div>
        <Rating {...this.props} initialRating={this.state.value} />

      </div>
    );
  }
}



export default ResetRating;
