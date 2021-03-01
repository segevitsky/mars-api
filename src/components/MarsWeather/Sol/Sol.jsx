import React from 'react';
import styles from './sol.module.css'

export default function Sol(props) {
    const { name, first,last, wind,temp, pre } = props
    return (
        <div className={styles.tempDiv}>
            <h1 className={styles.header}> Data Point: {name} </h1>
            <p> Temperature[AVG]: <strong> {temp} </strong> </p>
            <p> Wind[AVG]: <strong> {wind} </strong> </p>
            <p> Pressure[AVG]: <strong> {pre} </strong> </p>
            <p> First_UTC: <strong> {first} </strong> </p>
            <p> Last_UTC: <strong> {last} </strong> </p>
        </div>
    )
}
