import React, { Component, Fragment } from "react";
import Post from "./Post";
import Chirp from './Chirp';

class Chirper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        {this.props.value.map((message, index) => {
            return <Chirp key={index} msg={message} />
        })}
        </div>
    )
  }
}

export default Chirper;
