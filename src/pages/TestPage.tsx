import React, {useEffect} from "react";

import InputFocus from "../components/testComponent/InputFocus";
import MyVideoPlayer from "../components/videoPlayer/MyVideoPlayer";


const TestPage = () => {
    const getPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        console.log(data)
    }
    useEffect(()=>{
        getPosts()
    },[])
    return(
        <div>
            <div>

            </div>
            <InputFocus/>
            <MyVideoPlayer/>
        </div>
    )
}

export default TestPage