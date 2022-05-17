import { useEffect, useState } from "react";
import "./App.css";
import * as api from "./API.js";
function App() {
	// const makeAPICall = async () => {
	//   try {
	//     const response = await fetch('http://localhost:8080/items', { mode: 'cors',headers: {
	//       'Access-Control-Allow-Origin':'*'
	//     } });
	//     const data = await response.json();
	//     console.log({ data })
	//   }
	//   catch (e) {
	//     console.log(e)
	//   }
	// }
	// useEffect(() => {
	//   makeAPICall();
	// }, [])

	async function handleClick() {
		const items = await api.getBasket(15);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
	}
	async function addItemToBasket() {
		const items = await api.addItemToBasket(15, 7, 3);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
	}

	return (
		<div className="App">
			<div id="data">React Cors Guideee</div>

			<button onClick={handleClick}>Downloading data</button>
			<button onClick={addItemToBasket}>Add item</button>
		</div>
	);
}
export default App;
