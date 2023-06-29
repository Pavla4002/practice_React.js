import React, {useState} from 'react';
import MyButton from "../../../Button/MyButton";
import MyVideo from "../MyVideo/MyVideo";
import {IVideo, videos} from '../sourceVideo'
import styles from './index.module.css'

const MyVideoPlayer = () => {
    const [video,setVideo] = useState<IVideo>(videos[0])
    const [isPlaying, setIsPlaying] = useState(false);
    const handleClick = () =>{
        setIsPlaying(ip => !ip)
    }
    const handleChange: React.ChangeEventHandler<HTMLSelectElement>  = (e)=>{
        const currentVideo = videos.find(v => v.id === +e.target.value)
            if(currentVideo){
                setVideo(currentVideo)
            }
        setIsPlaying(false)
    }
    return (
        <div className={styles.areaVideoPlayer}>
            <span className={styles.mbText}>Это видеоплеер. Выбери один из предложенных фильмов и нажми кнопку Play.</span>
            <div className={styles.selectBlock}>
                <span className={styles.textPaddingR}>Выбор фильма:</span>
                <select name="" id="" onChange={handleChange} className={styles.selectVideo}>
                    {
                        videos.map(v =>(
                            <option key={v.id} value={v.id}>{v.title}</option>
                        ))
                    }
                </select>

            </div>
            <div className={styles.videoPlay}>
                <MyVideo video={video} isPlaying={isPlaying}/>
                <MyButton onClick={handleClick}>{isPlaying ? "Stop" : "Play"}</MyButton>
            </div>

        </div>
    );
};

export default MyVideoPlayer;