import React from "react";
import ImageCard from "./ImageCard";
import style from './MyWork.module.css';

const MyWork = () => {
    return (<div>
        <h1 className={style.main_title}>Mi trabajo</h1>
        <div className={style.flex_img}>
            <ImageCard img="https://lun-us.icons8.com/a/V39gAxzLlkuj3t6uOYjnCA/Z7Edq2Miu0WX6775_dcWiw/Pug%20%2819%20of%2024%29.png" />
            <ImageCard img="https://lun-us.icons8.com/a/V39gAxzLlkuj3t6uOYjnCA/9jkl6mv3F0iFgN6iGwvkTw/maze.png" />
            <ImageCard img="https://lun-us.icons8.com/a/V39gAxzLlkuj3t6uOYjnCA/w3mLiFEGVEml3-uym5RF6w/2.png" />
        </div>
    </div>);
}

export default MyWork;