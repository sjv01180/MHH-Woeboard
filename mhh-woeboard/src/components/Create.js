import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase-config';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('posts');
    this.state = {
      title: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title } = this.state;

    this.ref.add({
      title
    }).then((docRef) => {
      this.setState({
        title: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding post: ", error);
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD POST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/" className="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;