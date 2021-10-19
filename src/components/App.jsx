import React, { Component, Fragment } from "react";
import Chirper from "./Chirper";
import Post from "./Post";
import Chirp from "./Chirp";
import FirstChirps from "./FirstChirps";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Post />
        <FirstChirps />
      </Fragment>
    );
  }
}

export default App;
