import React, {useEffect, useRef} from "react";
import {IVideo} from "../sourceVideo";
import '../../../../styles/testPage.css'

interface MyVideoProps{
    video:IVideo,
    isPlaying: boolean,
}

const MyVideo = ({video, isPlaying }:MyVideoProps) =>{
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(isPlaying){
            console.log(videoRef.current?.play())
            videoRef.current?.play()
        }else{
            videoRef.current?.pause()
        }

    },[isPlaying])

    return(
        <div>
            <video src={video.source} ref={videoRef} poster={video.thumb} className="video"></video>
        </div>
    )
}

export default MyVideo