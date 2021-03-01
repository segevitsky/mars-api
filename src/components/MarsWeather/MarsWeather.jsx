import banner from '../../Images/apod.jpg';
import Header from '../UI/Header/Header';
import items from '../../data/forecast';
import Sol from './Sol/Sol';
import styles from './marsWeather.module.css'




export default function MarsWeather() {
    const { sol_keys, validity_checks, ...solData }  = items;
    const formattedData = Object.entries(solData).map(([sol,data]) => {
        return {
            sol: sol,
            temp: data.AT.av,
            windSpeed: data.HWS.av,
            pressure: data.PRE.av,
            first: data.First_UTC,
            last: data.Last_UTC
        }
    })



    const renderedData = formattedData.map(el => (
        <Sol 
            key={el.sol} 
            name={el.sol} 
            first={el.first} 
            last={el.last} 
            pre={el.pressure} 
            temp={el.temp}
            wind={el.windSpeed}
        />
        )
    )

    return (
        <div>
             <Header name='Mars Weather' img={banner} back/>
             <div className={styles.weatherGrid}> {renderedData} </div>
             <div className={styles.dictionary}>
                <h3> AT - Atmosphric temperature sensor </h3>
                <h3> HWS - Horizontal wind speed sensor </h3>
                <h3> PRE - Atmosphric pressure sensor </h3>
             </div>
        </div>
    )
}



