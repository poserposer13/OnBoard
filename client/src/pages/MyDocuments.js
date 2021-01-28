import axios from 'axios';
import React from 'react';
import MyDocs from '../components/myDocs';
import { useState } from 'react';

export default function MyDocuments({ token }) {
    const [images, setImages] = useState([]);

    const Post = (e) => {
        e.preventDefault();
        const file = document.getElementById('file').files;
        const formData = new FormData();

        formData.append('img', file[0]);


        fetch('/api/file/upload', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                axios.get('/api/file/userfiles').then(({ data }) => {
                    setImages(data);
                });

                console.log(file[0]);
            });
    };

    return (
        <div>
            <h2>Document Upload</h2>
            <div className="container">
                <div className="jumbotron">
                    <h3 className="display-4">Please upload necessary documents here</h3>
                    <p className="lead">
                        Note: files uploaded must be .jpeg or .png files
                    </p>
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
                <button type="button" className="btn btn-primary btn-block" onClick={Post}>
                    Upload
                </button>
                <MyDocs parentImages={images} />
            </div>
        </div>
    );
}