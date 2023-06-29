import React, {useEffect} from "react";
// import 'styles/testPage.css'
import styles from './index.module.css'
import InputFocus from "../../components/testComponent/InputFocus/InputFocus";
import MyVideoPlayer from "../../components/testComponent/videoPlayer/MyVideoPlayer/MyVideoPlayer";
import {Link} from "react-router-dom";
import Timer from "../../components/testComponent/Timer/Timer";


const TestPage = () => {
    const getPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
        getPosts();
    },[]);
    return(
        <div className={styles.testPage}>
            <div className={styles.timerAndVideo}>
                <div className={styles.inputTimer}>
                    <div className={styles.inputBlock}>
                        <InputFocus/>
                    </div>
                    <div className={styles.timerBlock}>
                        <Timer/>
                    </div>
                </div>
                <div className={styles.videoBlock}>
                    <MyVideoPlayer/>
                </div>
            </div>
            <div className={styles.link}>
                <span>Тут находится ссылка на главную страницу:</span>
                <Link to=".." className={styles.lineLink}>Ссылка на главную</Link>
            </div>

        </div>
    )
}
export default TestPage