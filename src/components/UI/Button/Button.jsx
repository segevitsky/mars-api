import React from 'react';
import styles from './button.module.css';

const Button = (props) => (
	<button
		disabled={props.disabled}
		className={[styles.Button, styles[props.btnType]].join(' ')}
		onClick={props.onClick}
	>
		{props.children}
	</button>
);

export default Button;
