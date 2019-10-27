import React, { Component } from 'react';
import firebase from '../firebase-config';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const post = doc.data();
        this.setState({
          key: doc.id,
          title: post.title,
          body: post.body
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

    const { title, body } = this.state;

    const updateRef = firebase.firestore().collection('posts').doc(this.state.key);
    updateRef.set({
      title,
      body
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        body: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div className="container App">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT BOARD
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.key}`} className="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
                <label htmlFor="body">Post Body:</label>
                <textarea type="text" className="form-control" name="body" value={this.state.body} onChange={this.onChange} placeholder="Body" cols="80" rows="3" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;