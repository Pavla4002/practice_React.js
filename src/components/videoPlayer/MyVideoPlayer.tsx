import React, {useState} from 'react';
import MyButton from "../MyButton";
import MyVideo from "./MyVideo";
import {IVideo, videos} from './sourceVideo'

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
        <div>
            <select name="" id="" onChange={handleChange}>
                {
                    videos.map(v =>(
                        <option key={v.id} value={v.id}>{v.title}</option>
                    ))
                }
            </select>
            <MyVideo video={video} isPlaying={isPlaying}/>
            <MyButton onClick={handleClick}>{isPlaying ? "Stop" : "Play"}</MyButton>
        </div>
    );
};

export default MyVideoPlayer;