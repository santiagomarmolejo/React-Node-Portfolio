import react, { useState, useEffect } from 'react';
import ImageCard from '../components/ImageCard';
import Header from '../components/Header';

const Photos = (props) => {

    var [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () =>  {
        const data = await fetch('http://localhost:3001/getpost')
        const photos = await data.json();

        setPhotos(photos);
    }


    return (<div>
        <Header />
        {photos.map(item => {
            
            console.log(item.url);

            <ImageCard url = {item.url}/>
        })}
    </div>);
}

export default Photos