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
    firebase.initializeApp(config);
  }

  componentWillMount() {
    let postRef = firebase.database().ref('posts');
    let _this = this;
    postRef.on('value', function(snapshot) {
      console.log(snapshot.val());

      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    let children = this.props.children;
    return (
      <div className="App">
        {children && React.cloneElement(children, {
          firebaseRef: firebase.database().ref('posts'),
          posts: this.state.posts,
          loading: this.state.loading
        })}
      </div>
    );
  }
}

export default App;
