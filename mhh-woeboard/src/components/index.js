import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import './App.css';
import firebase from '../firebase-config';

class App extends Component {
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
      console.log(doc);
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
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Create Post</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Discussion Board</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map(post =>
                <Link to={`/show/${post.key}`}>
                  <tr key={post.key}>
                    <td>{post.title}</td>
                  </tr>
                  </Link>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;