import React from "react";
import imageMe from '../images/me.jpg';
import style from './AboutMe.module.css';

const AboutMe = (props) => {
    return (
        <div>
            <article className={style.center}>
                <h2 className={style.main_title}>Acerca de mi</h2>
                <figure>
                    <img src={imageMe} className={style.round_img} alt=""/>
                    <h4>Santiago Marmolejo</h4>
                    <p>Ing.Multimedia</p>
                </figure>
            </article>
        </div>
    );
}

export default AboutMe;