import React, { useState } from 'react';

function ProgressCheck() {
    const [progress, setProgress] = useState(0);
    return (
        <div>
            <h1>Progress Bar</h1>
            <div style={{
                width: '100%',
                height: '30px',
                backgroundColor: 'lightgray',
                borderRadius: '10px', 
                border: '1px solid black',
                // margin: 'auto',
                // textAlign: 'center',
                display: 'flex', // Added to enable flexbox for the outer div
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <div id='testBgColor' style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: progress >= 80 ? 'green' : progress >= 40 ? 'orange' : 'red',
                borderRadius: '10px',
                transition: 'width 0.5s ease-in-out',
                color: 'white',
                // display: 'flex', // Added to enable flexbox
                // alignItems: 'center', // Center vertically
                // justifyContent: 'center', // Center horizontally
            }}>
            <span style={{position: 'fixed', margin: 'auto'}}>{`${progress}%`}</span></div>
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: '10px'}}>
                <button onClick={() => setProgress((prev) => Math.max(0, prev - 10))}>-10%</button>
                <button onClick={() => setProgress((prev) => Math.min(100, prev + 10))}>+10%</button>
            </div>
        </div>
    );
}

export default ProgressCheck;
