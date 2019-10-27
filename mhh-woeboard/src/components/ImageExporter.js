import React, { Component } from 'react';
import storageRef from '../firebase-config';

class ImageExporter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload = () => {
    const {image} = this.state;
    
    storageRef.put(image).then(function(snapshot) {
      console.log("uploaded image successfully");
    });
    this.props.history.push("/Create")
  }

  render() {
    return(
      <div>
        <input type="file" onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleUpload}>Upload Wholesome Meme</button>
      </div>
    );
  }
}

export default ImageExporter;