import React, { Component } from "react";
import Head from "./Head/Head";
import Body from "./body/body";
import linkedin from "./asserts/linkedin.png";
import github from "./asserts/github2.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "< Salim Toubal />" };
  }
  render() {
    return (
      <div className="App">
        <Head />
        <a
          href="https://www.linkedin.com/in/salim-toubal-aa1a14b8/"
          target="_blank"
        >
          <img src={linkedin} className="img" alt="linkedin" />
        </a>
        <a href="https://github.com/salimtb" target="_blank">
          <img src={github} className="img" alt="github" />
        </a>
        <h1 className="title">{this.state.name}</h1>
        <h2 className="subTitle">software developer</h2>
        <hr />
        <Body />
      </div>
    );
  }
}

export default App;
