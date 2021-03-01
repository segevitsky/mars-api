import React from "react";
import styles from "./pagination.module.css";

export default function Pagination({setPageHandler,page,back, forward}) {
	return (
		<div style={{ textAlign: "center" }}>

			<button className={styles.pageBtn} onClick={back}>
				{"<"}
			</button>
			<button
				className={styles.pageBtn}
				onClick={setPageHandler}
				id="1"
				active="true"
			>
				1
			</button>
			<button className={styles.pageBtn} style={{ backgroundColor: page === 2 ? 'rgb(255,204,0)' : null} }onClick={setPageHandler} id="2">
				2
			</button>
			<button className={styles.pageBtn} onClick={setPageHandler} id="3">
				3
			</button>
			<button className={styles.pageBtn} onClick={setPageHandler} id="4">
				4
			</button>
			<button className={styles.pageBtn} onClick={setPageHandler} id="5">
				5
			</button>
			<button className={styles.pageBtn} onClick={forward}>
				{" "}
				{">"}{" "}
			</button> 
		</div>
	);
}
