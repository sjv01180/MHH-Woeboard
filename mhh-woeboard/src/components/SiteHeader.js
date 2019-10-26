import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class SiteHeader extends Component {
  render() {
    return (
      <div className ="NavBar">
        <ul>
          <div className="dropdown">
            <button class="dropbtn">Get Happy 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Post Memes</a>
              <a href="#">Animal Pictures</a>
              <a href="#">Hype Squad</a>
            </div>
          </div>
          <div className="dropdown">
            <button class="dropbtn">Get Angry 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Just Yell</a>
              <a href="#">Vent Squad</a>
            </div>
          </div> 
          <div className="dropdown">
            <button class="dropbtn">Get Sentimental 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Tear Fuel</a>
              <a href="#">Cry Squad</a>
            </div>
          </div> 

        </ul>
      </div>
    );
  }
}

export default SiteHeader;