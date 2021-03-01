import React, { useState, useEffect} from 'react';
import styles from './gallery.module.css';

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [slice] = useState(5);
    const [shownImages, setShownImages] = useState(0);

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-07-14&api_key=${process.env.REACT_APP_API_KEY}`
    useEffect(() => {
        const getImages = async () => {
            const response = await fetch(url);
            const data = await response.json();
            const photos = await data.photos;
            setImages(new Array(Math.ceil(photos.length / slice))
            .fill()
            .map(_ => photos.splice(0, slice)));
        }
        getImages()

    }, [slice, url])
    
    let imagesToRender;
    if (images && images.length > 0) {
        imagesToRender = images[shownImages].map(el => <img key={el.id} src={el.img_src} alt='mars' />)
    }

    const back = () => {
        setShownImages(shownImages => shownImages-1)
    }

    const forward = () => {
        setShownImages(shownImages => shownImages+1)
    }

    return (
        <>
        <div className={styles.galleryWrapper}>
        {shownImages !== 0 ?<button onClick={back} className='btnStyle'> { '<' } </button> : null}
        <div className={styles.imageGrid}>
            {imagesToRender}
        </div>
       {shownImages !==5 ? <button onClick={forward} className='btnStyle'> { '>' } </button> : null}
        </div>
        </>
    )
}

