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
              <ImageExporter />
              MEME LIST
            </h3>
          </div>
          <div className="panel-body panel-gallery">
            <div className="gallery">
            <a target="_blank" href="./src/components/images/garfeild.jpg">
              <img src={require("./images/garfeild.jpg")} alt="garf" width="40px" height="20px" />
            </a>
            <div className="desc">good garf</div>
            <div className="gallery">
            <a target="_blank" href="./src/components/images/garfeild.jpg">
              <img src={require("./images/garfeildwithoutgarfeild.jpg")} alt="garf" width="40px" height="20px" />
            </a>
            <div className="desc">good garf</div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
    );
  }
}

export default PostMemes;