import React, {useState , useEffect} from 'react';
import Header from '../UI/Header/Header';
import Pagination from '../UI/Pagination/Pagination';
import banner from '../../Images/apod.jpg';
import { todaysDate } from '../../helpers';
import styles from './imagesByDate.module.css';


export default function ImagesByDate() {
    const [images, setImages] = useState([]);
    const [date, setDate] = useState(todaysDate());
    const [page, setPage] = useState(1)
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`

    useEffect(() => {
        const getImages = async () => {
            const response = await fetch(url);
            const data = await response.json();
            const photos = await data.photos;
            setImages(photos);
        }
        getImages()

    }, [url])

    const setPageHandler = (e) => {
        console.log(e)
        const name = +e.target.id;
        setPage(name);
    }

    const setDateHandler = e => {
        setDate(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const back = () => {
        if (page === 1) return;
        setPage(currPage => currPage-1)
    }

    const forward = () => {
        console.log('clicked!!!')
        if (page === 5) return;
        setPage(currPage => currPage+1)
    }

    let imagesToRender = 'Sorry...'
    if (images && images.length > 0) {
        imagesToRender = images.map(img => <img className={styles.imgGrid} key={img.id} src={img.img_src} alt='mars'/>)
    }

    return (
        <div>
            <Header name='Mars Image By Date' img={banner} back/>
            <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                Earth Date:  
                <input 
                    type="date" 
                    id="start" 
                    name="trip-start"
                    value={date}
                    min="2018-01-01" 
                    className={styles.dateInput}
                    onChange={setDateHandler}
                    onSubmit={handleSubmit}
                    />
            </label>
            </form>
            {images.length > 0 ? <div className={styles.imageGrid}> {imagesToRender} </div> : <h3 className={styles.h3}>Sorry no images please choose another date... </h3>}
        {images.length !==0 ? <Pagination page={page} setPageHandler={setPageHandler} forward={forward} back={back} /> : null}
        </div>
    )
}
