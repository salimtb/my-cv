import React, { Component } from "react";
import avatar from "../asserts/img_avatar.png";
import contact from "../asserts/contact.png";
import "./Head.css";

class Head extends Component {
  render() {
    return (
      <div className="Head-header">
        <div className="container">
          <img src={contact} className="Head-contact" alt="contact" />
          <img src={avatar} className="Head-avatar" alt="avatar" />
        </div>
      </div>
    );
  }
}

export default Head;
