import React from "react";
import style from './ImageCard.module.css';

const ImageCard = (props) => {
    return (<div>
        <img src={props.img} alt=""/>
        <p class={style.img_text}> Canon EOS M50 <br/> f/1.8 <br/>1/320 <br/> ISO 100 <br/>Pug</p>
    </div>);
}

export default ImageCard;