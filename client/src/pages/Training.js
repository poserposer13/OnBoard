import React from 'react';
import ReactPlayer from 'react-player';

function Training() {

    return (
        <div>
            <h2 style={{margin: 'auto'}}>
                Training
            </h2>
            <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO' className='video-player' />
        </div>
    );
}

export default Training;