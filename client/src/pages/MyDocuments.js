import axios from 'axios';
import React from 'react';
import MyDocs from '../components/myDocs';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import {ReactComponent as UploadLogo} from '../undraw/upload.svg';

export default function MyDocuments({ token }) {
    const [images, setImages] = useState([]);
    const [filename, setFilename] = useState('Choose File');

    const onChange = event => {
        setFilename(event.target.files[0].name);
    };

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
            <h2>
                Uploads <UploadLogo style={{ height: 153, width: 136 }}/>
            </h2>
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
                            onChange={onChange}
                        />
                        <label style={{marginLeft: '15rem', marginRight: '15rem'}} className="custom-file-label" htmlFor="file">
                            {filename}
                        </label>
                    </div>
                </form>
                <div className='container'>
                    <Button
                        style={{marginLeft: '45%', marginRight: '50%'}}
                        variant='contained'
                        color='primary'
                        onClick={Post}>
                            Upload
                    </Button>
                </div>
                <MyDocs parentImages={images} />
            </div>
        </div>
    );
}