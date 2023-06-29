import React, {useRef, useState} from "react";
import MyButton from "../../Button/MyButton";
import styles from './index.module.css'


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
        <div className={styles.timerArea}>
            <div className={styles.btnTime}>
                <MyButton onClick={handleClickStart}>Start</MyButton>
                <MyButton onClick={handleClickStop}>Stop</MyButton>
            </div>

            <div className='time-block-timer'>
                <div>
                    Начало: {startTime}
                </div>
                <div>
                    Сейчас: {now}
                </div>
                <div>
                    Прошедшее время: {secondsPassed}
                </div>
            </div>

        </div>
    )
}

export default Timer