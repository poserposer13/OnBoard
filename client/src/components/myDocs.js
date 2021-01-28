import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function MyDocs({ parentImages }) {
    const [images, setImages] = useState(parentImages);
    const [previousImages, setPreviousImages] = useState();


    if (parentImages !== previousImages) {
        setImages(parentImages);
        setPreviousImages(parentImages);
    }

    useEffect(() => {
        getFiles();
    }, []);

    function deleteFile(filename) {
        axios.delete('/api/file/' + filename).then(() => {
            getFiles();
        });
    }

    function getFiles() {
        axios.get('/api/file/userfiles').then(({ data }) => {
            setImages(data);
        });
    }

    return (
        <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
            {images.map(image => {
                return (
                    <Card style={{ width: '18rem', margin: '0.5rem' }}>
                        <Card.Img src={`/api/file/image/${image.filename}`} variant="top" id="img" />
                        <Card.Body>
                            <form method='DELETE'>
                                <Button onClick={() => {
                                    deleteFile(image.filename);
                                }} variant='danger'>Delete</Button>
                            </form>
                        </Card.Body>
                    </Card>
                );
            }
            )}
        </div>
    );
}