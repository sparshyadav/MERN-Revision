import React, { useState } from 'react'

const Seven_Timer = () => {
    const [mins, setMins] = useState(4);
    const [secs, setSecs] = useState(59);
    const timing = () => {
        if (secs == 0) {
            setSecs(59);

            if (mins > 0) {
                setMins(mins - 1);
            }
        }
        else {
            setSecs(secs - 1);
        }
    }
    setTimeout(timing, 1000);
    return (
        <div>
            <h1>Time - {mins} : {secs}</h1>
        </div>
    )
}

export default Seven_Timer
