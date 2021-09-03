import React from "react";
import style from './BigImage.module.css';
import mazeImage from '../images/maze1.jpg'

const BigImage = (props) => {
    return (<div>
        <article>
            <img src={mazeImage} className = {style.main_img} alt=""/>
            <div className ={style.centered_over_image}>
            <h1 className ="main-text">Mas que una <br/> mascota
            </h1>
            <button className = {style.btn_orange}>Contacto</button>
            </div>
        </article>
    </div>);
}

export default BigImage;