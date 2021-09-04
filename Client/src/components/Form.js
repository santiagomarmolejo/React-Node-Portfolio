import React, { Fragment } from "react";
import style from './Form.module.css'

const Form = (props) => {
    return (<Fragment>
        <div className={style.center_screen}>
            <div className={style.form}>
                <h1>Formulario</h1>
                <form className={style.flex_column}>
                    <input type="text" placeholder='Nombre' className={`${style.form_item} ${style.form_input}`} />
                    <input type="text" placeholder='URL' className={`${style.form_item} ${style.form_input}`} />
                    <input type="text" placeholder='Shutter Speed' className={`${style.form_item} ${style.form_input}`} />
                    <input type="text" placeholder='Aperture' className={`${style.form_item} ${style.form_input}`} />
                    <input type="text" placeholder='ISO' className={`${style.form_item} ${style.form_input}`} />
                    <button className={`${style.form_item} ${style.form_button}`}>Enviar</button>
                </form>
            </div>
        </div>
    </Fragment>)
}

export default Form