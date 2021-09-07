import react, { useState, useEffect, Fragment } from 'react';
import style from "./photos.module.css";
import ImageCard from '../components/ImageCard';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Photos = (props) => {

    var [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/getpost')
        const photos = await data.json();

        setPhotos(photos);
    }


    const generateData = () => {
        return (<Fragment>
            <div className = {style.flex_img}>
                {photos.map(item => {
                    console.log(item.url)
                    return <ImageCard key={item._id} img={item.url} />
                })}
            </div>

        </Fragment>);
    }


    return (<div>
        
        <Header />
        <h1 className ={style.titulo}> Mis fotos</h1>
        {generateData()}
        <Footer />

    </div>);
}

export default Photos