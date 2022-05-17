import "./App.css";
import * as api from "./API.js";

import { Container, Stack, Button } from "react-bootstrap";
import Header from "./components/Navbar";
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

	async function showBasket() {
		const items = await api.getBasket(15);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
	}
	async function addItemToBasket() {
		const items = await api.addItemToBasket(15, 7, 1);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
		showBasket();
	}

	return (
		<div className="App">
			<Stack gap={5}>
				<div>
					<Header />
				</div>
				<div>
					<Container>
						<div id="data">React Cors Guideee</div>
						<Button variant="outline-secondary" onClick={showBasket}>
							Show basket
						</Button>

						<Button variant="outline-warning" onClick={addItemToBasket}>
							Add item
						</Button>
					</Container>
				</div>
			</Stack>
		</div>
	);
}
export default App;
