import React, {useRef, useState} from "react";
import MyButton from "../MyButton";


const Timer = () => {
    const [startTime, setStartTime] = useState<number>(0);
    const [now, setNow] = useState<number>(0);
    const intervalRef = useRef<any>(null)

    const handleClickStart = () =>{
        setStartTime(Date.now())
        clearInterval(intervalRef.current)
        intervalRef.current =  setInterval(()=>{
            setNow(Date.now())
        },100)
    }
    const handleClickStop = () =>{
        console.log(intervalRef.current)
        clearInterval(intervalRef.current)
    }
    let secondsPassed = 0;
    if(startTime!==null && now!==null){
        secondsPassed=(now-startTime)/1000
    }
    return(
        <div>
            <div>
                Time: {startTime}
            </div>
            <div>
                Time now: {now}
            </div>
            <div>
                Time passed: {secondsPassed}
            </div>
            <MyButton onClick={handleClickStart}>Start</MyButton>
            <MyButton onClick={handleClickStop}>Stop</MyButton>
        </div>
    )
}

export default Timer