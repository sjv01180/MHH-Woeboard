import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import './App.css';
import firebase from '../firebase-config';
import ImageExporter from './ImageExporter';

class PostMemes extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('posts');
    this.unsubscribe = null;
    this.state = {
      posts: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      const { title, body } = doc.data();
      posts.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        body
      });
    });
    this.setState({
      posts
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container App">
        <SiteHeader/>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">
              Exquisite Memes
            </h3>
            <ImageExporter message={"Upload Wholesome Memes"}/>
          </div>
          <div className="panel-body">
          <div id="gallery">
          <ul class="nivo">
            <li>
            <a href="images/garfeild.jpg"><img src={require("./images/garfeild.jpg")} width="600" height="400"/>
            </a></a>
            </li>
            <li>
            <a>
            <span>mid life crisis</span>
            <a href="images/garfeildwithoutgarfeild.jpg"><img src={require("./images/garfeildwithoutgarfeild.jpg")} width="600" height="400"/>
            </a></a>
            </li>
          </ul>
          </div>
          </div>
        <div class="clearfix"></div>
      </div>
    </div>
    );
  }
}

export default PostMemes;