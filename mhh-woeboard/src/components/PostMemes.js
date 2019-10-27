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
            <h2 className="panel-title">
              Exquisite Memes
            </h2>
            <ImageExporter />
          </div>
          <div className="panel-body">
          <div id="gallery">
          <ul class="nivo">
            <li>
            <a>
            <span>cute puppies</span>
            <a href="images/106927941_pa-6355447.jpg"><img src={require("./images/106927941_pa-6355447.jpg")} alt="doggo" width="300" height="200"/>
            </a>
            </a>
            </li>
            <li>
            <a>
            <span>cute kittens</span>
            <a href="images/skynews-kitten-cat_4627790.jpg"><img src={require("./images/skynews-kitten-cat_4627790.jpg")} alt="kittens" width="600" height="400"/>
            </a>
            </a>
            </li>
            <li>
            <a>
            <span>eldrich cat</span>
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
          <div class="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostMemes;