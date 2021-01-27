import React from 'react';
import ParticlesBg from 'particles-bg';

function BgCircles() {
    const config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: 'center',
        color: ['random', '#ff0000'],
        cross: 'dead',
        random: 15,
        g: 5,
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
    };

    return (
        <>
            <ParticlesBg type="circle" config={config} bg={true} />
        </>
    );
}


export default BgCircles;