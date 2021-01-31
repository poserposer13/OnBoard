import React from 'react';
import ReactPlayer from 'react-player';
import { ReactComponent as TrainingLogo } from '../undraw/training.svg';

function Training() {

    return (
        <div>
            <h2 style={{ margin: 'auto' }}>
                Training <TrainingLogo style={{ height: 153, width: 136 }} />
            </h2>
            <p style={{ fontSize: 20, color: '#696969', lineHeight: '1.25rem', letterSpacing: '0.08rem' }}>
                New training modules will be posted here.
            </p>
            <ReactPlayer
                style={{marginTop: 40}}
                url='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
                playing={true}
                className='video-player' />
        </div >
    );
}

export default Training;