import { useEffect, useState } from "react";

function Timer(){
    const [time,setTime] = useState({sec : 0,min : 0, hrs : 0, milli:0});

    const updateTime = () => {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const milli = date.getMilliseconds();
        setTime({sec : seconds,min : minutes, hrs : hours})

    }
    

    const handleStart = () =>{
        setInterval(updateTime, 1);
    }

    return(
        <div>
            <p>Time is :{time.hrs}:{time.min}:{time.sec}:{time.milli}</p>
            <button onClick={handleStart}>Start</button>
        </div>
    );
}

export default Timer;