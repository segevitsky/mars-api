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
            <p className={styles.text}> Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched November 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).
            Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.
             </p>
            <Gallery />
            <div className={styles.btnDiv}>
                <Button> <Link className={styles.link} to='/images'> View Images By Date </Link> </Button>
                <Button> <Link className={styles.link} to='/weather'> Weather </Link> </Button>
            </div>
            
        </div>
    )
}
