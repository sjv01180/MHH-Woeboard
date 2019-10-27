import React, { Component } from 'react';
import firebase from '../firebase-config';
import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          post: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('posts').doc(id).delete().then(() => {
      alert("Post successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing post: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="post-view">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.post.title}
            </h3>
          </div>
          <div className="panel-body">
          
          <div className="postBody">
          {this.state.post.body}
          </div>
            <div className="editButton">
            <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit Post</Link>&nbsp;
            </div>
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete Post</button>
            <h3 className = "return"><Link to="/">Back to Discussion Boards</Link></h3>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;