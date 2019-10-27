import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './App.css';

class SiteHeader extends Component {
  render() {
    return (
      <div className ="NavBar">
        <ul>
          <div className="dropdown">
            <button className="dropbtn">Get Happy 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <Link to={`/get_happy/post_memes`} className="btn btn-success">Post Memes</Link>
              <a href="#">Animal Pictures</a>
              <a href="#">Hype Squad</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Get Angry 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Just Yell</a>
              <a href="#">Vent Squad</a>
            </div>
          </div> 
          <div className="dropdown">
            <button className="dropbtn">Get Sentimental 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
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