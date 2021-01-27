// import { Form } from 'react-bootstrap';
import React from 'react';

class MyDocuments extends React.Component {
    Post = (e) => {
        e.preventDefault();
        const file = document.getElementById('file').files;
        const formData = new FormData();

        formData.append('img', file[0]);

        fetch('/api/file/upload', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                document
                    .getElementById('img')
                    .setAttribute(
                        'src',
                        `/api/file/image/${res.file.filename}`
                    );
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
                    <form action="/upload" method="POST" encType="multipart/form-data">
                        <div className="custom-file mb-3">
                            <input
                                type="file"
                                name="file"
                                className="custom-file-input"
                                id="file"
                            />
                            <label className="custom-file-label" htmlFor="file">
                                Choose file
                            </label>
                        </div>
                    </form>
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
