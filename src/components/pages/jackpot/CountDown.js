import React from 'react'
import Countdown from 'react-countdown';


const CustomCountDown = () => {
    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <div className='countdown_timer'>
                <div className='count_number'> <p>Minute</p>  <span> {minutes}</span> </div>
                <div className='  devider'> <span>:</span> </div>
                <div className='count_number'> <p>Seconds</p> <span> {seconds}</span> </div>
            </div>;
        }
    };
    return (
        <Countdown
            date={Date.now() + 600000}
            renderer={renderer}
        />
    )
}

export default CustomCountDown

