import React, { Component } from 'react';
import firebase from '../firebase-config';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title,body } = this.state;

    const updateRef = firebase.firestore().collection('posts').doc(this.state.key);
    updateRef.set({
      title
    }).then((docRef) => {
      this.setState({
        key: '',
        title: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT Post
            </h3>
          </div>
          <div class="panel-body">
            <div class="postBody">
            <h3><Link to={`/show/${this.state.key}`} class="btn btn-primary">Back to Discussion Boards</Link></h3>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;