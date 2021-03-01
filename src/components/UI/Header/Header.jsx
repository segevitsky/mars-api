import React from 'react'
import styles from './header.module.css';
import { useHistory } from 'react-router-dom';

export default function Header(props) {
    const history = useHistory();
    return (
        <div>
            {props.back ? <button onClick={() => history.push('/')} className='btn'> {'<'} </button> : null}
            <h1 className={styles.header}> {props.name} </h1>
            <img src={props.img} alt='main' className={styles.img}/>
        </div>
    )
}
