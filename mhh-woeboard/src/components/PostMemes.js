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
        <SiteHeader />
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
            Exquisite Memes
              <ImageExporter />
            </h3>
          </div>
          <div className="panel-body">
          <div id="gallery">
          <ul class="nivo">
            <li>
            <a href="images/106927941_pa-6355447.jpg"><img src={require("./images/106927941_pa-6355447.jpg")} alt="doggo" width="300" height="200"/>
            <span>cute puppies</span></a>
            </li>
            <li>
            <a href="images/skynews-kitten-cat_4627790.jpg"><img src={require("./images/skynews-kitten-cat_4627790.jpg")} alt="kittens" width="600" height="400"/>
            <span>cute kittens</span></a>
            </li>
            <li>
            <a href="images/garfeild.jpg"><img src={require("./images/garfeild.jpg")} width="600" height="400"/>
            <span>eldrich cat</span></a>
            </li>
            <li>
            <a href="images/garfeildwithoutgarfeild.jpg"><img src={require("./images/garfeildwithoutgarfeild.jpg")} width="600" height="400"/>
            <span>mid life crisis</span>
            </a>
            </li>
          </ul>
          </div>
          <div class="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostMemes;