import React, { Fragment, useState } from "react";
import style from './Form.module.css'

const Form = (props) => {

    const [img_name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [shutter_speed, setShutter_speed] = useState('');
    const [f, setF] = useState('');
    const [iso, setIso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const submit = {
            url,
            iso,
            f,
            shutter_speed,
            img_name
        }

        console.log(submit);

        fetch('http://localhost:3001/insert', {
            method: 'POST',
            headers: { 'Content-Type': "aplication/json" },
            body: JSON.stringify(submit)
        }).then(() => console.log('enviado'))
            .catch((error) => console.log(`Something is wrong: ${error}`))

    }


    return (<Fragment>
        <div className={style.center_screen}>
            <div className={style.form}>
                <h1>Formulario</h1>
                <form className={style.flex_column} onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder='Name' required
                        value={img_name}
                        onChange={e => setName(e.target.value)}
                        className={`${style.form_item} ${style.form_input}`} />
                    <input type="text"
                        placeholder='URL' required
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        className={`${style.form_item} ${style.form_input}`} />
                    <input type="text"
                        placeholder='Shutter Speed' required
                        value={shutter_speed}
                        onChange={e => setShutter_speed(e.target.value)}
                        className={`${style.form_item} ${style.form_input}`} />
                    <input type="text"
                        placeholder='Aperture' required
                        value={f}
                        onChange={e => setF(e.target.value)}
                        className={`${style.form_item} ${style.form_input}`} />
                    <input type="text"
                        placeholder='ISO' required
                        value={iso}
                        onChange={e => setIso(e.target.value)}
                        className={`${style.form_item} ${style.form_input}`} />
                    <button className={`${style.form_item} ${style.form_button}`} >Enviar</button>
                </form>
            </div>
        </div>
    </Fragment>)
}

export default Form