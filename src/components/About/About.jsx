import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import styles from './about.module.css';
import banner from '../../Images/apod.jpg';
import Header from '../UI/Header/Header';
import Gallery from '../UI/Gallery/Gallery'


export default function About() {

    return (
        <div className={styles.about}>
            <Header img={banner} name='About The Program'/>
            <p className={styles.text}> One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery. </p>
            <Gallery />
            <div className={styles.btnDiv}>
                <Button> <Link className={styles.link} to='/images'> View Images By Date </Link> </Button>
                <Button> <Link className={styles.link} to='/weather'> Weather </Link> </Button>
            </div>
            
        </div>
    )
}
