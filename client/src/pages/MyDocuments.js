// import { Form } from 'react-bootstrap';
import React from 'react';

class MyDocuments extends React.Component {
  Post = (e) => {
      e.preventDefault();
      const file = document.getElementById('inputGroupFile01').files;
      const formData = new FormData();

      formData.append('img', file[0]);

      fetch('/file', {
          method: 'POST',
          body: formData,
      }).then(res => res.json())
          .then((res) => {
              console.log(res);
              document
                  .getElementById('img')
                  .setAttribute('src', `/file/${res.filename}`);
              console.log(file[0]);
          });
  };

  render() {
      return (
          <div>
              <h2>Document Upload</h2>
              <div className="container">
                  <div className="jumbotron">
                      <h1 className="display-4">Image Uplaoder</h1>
                      <p className="lead">
              This is a simple application to upload and retrieve images from a
              database
                      </p>
                      <hr className="my-4" />
                  </div>
                  <div className="input-group mb-3">
                      <div className="custom-file">
                          <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                          />
                          <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
                          </label>
                      </div>
                  </div>
                  <button type="button" className="btn btn-primary" onClick={this.Post}>
            Upload
                  </button>
                  <img
                      id="img"
                      alt="upload"
                      style={{
                          display: 'block',
                      }}
                  ></img>
              </div>
          </div>
      );
  }
}

export default MyDocuments;
