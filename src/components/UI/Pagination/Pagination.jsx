import React from "react";
import styles from "./pagination.module.css";
import Button from '../Button/Button'

export default function Pagination({setPageHandler,page,back, forward}) {
	return (
		<div style={{ textAlign: "center" }}>
			<Button onClick={back}> {'<'} </Button>
			<Button onClick={setPageHandler} id="1"> 1 </Button>
			<Button onClick={setPageHandler} id="2"> 2 </Button>
			<Button onClick={setPageHandler} id="3"> 3 </Button>
			<Button onClick={setPageHandler} id="4"> 4 </Button>
			<Button onClick={setPageHandler} id="5"> 5 </Button>
			<Button onClick={back}> {'>'} </Button>
		</div>
	);
}
