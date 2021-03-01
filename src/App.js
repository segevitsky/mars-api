import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import ImagesByDate from "./components/ImagesByDate/ImagesByDate";
import MarsWeather from "./components/MarsWeather/MarsWeather";

export default function App() {
	return (
		<Switch>
			<Route path="/" exact>
				<About />
			</Route>
			<Route path="/images">
				<ImagesByDate />
			</Route>
			<Route path="/weather">
				<MarsWeather />
			</Route>
		</Switch>
	);
}
