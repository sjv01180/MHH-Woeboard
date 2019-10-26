import React, {Component} from 'react';
import './App.css';

import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from '../../firebase-config';
import { loadPartialConfig } from '@babel/core';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className ="NavBar">
          <ul>
            <div className="dropdown">
              <button class="dropbtn">Get Happy 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="./index.js">Post Memes</a>
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
        
        <div className = "Post">
            <div className = "TopBar">
                <h1>Title</h1>
                <h3>user</h3>
            </div>
            <div className = "content">

                <Image
                    style={{width: 50, height: 50}}
                 source={{uri: 'https://me.me/i/important-info-if-you-like-pina-coladas-none-036c98a691a14959a84454c9a2335927'}}
                />
                caption, placeholder
            </div>

        </div>
        <div className ="Comments">
            <div className = "comment">
                <header><h3>user</h3></header>
                comment content
            </div>
        </div>



      </div>
    );
  }
}

export default App;
