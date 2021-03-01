import React from 'react';
import styles from './button.module.css';

const Button = (props) => (
	<button
		disabled={props.disabled}
		className={styles.Button}
		onClick={props.onClick}
        id={props.id}
        style={{ backgroundColor: props.page ? 'rgb(255,204,0)' : 'black'}}

	>
		{props.children}
	</button>
);

export default Button;
