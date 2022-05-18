import "./App.css";

import { Stack } from "react-bootstrap";
import Header from "./components/Navbar";
import Cart from "./components/Cart";
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

	return (
		<div className="App">
			<Stack gap={5}>
				<div>
					<Header />
				</div>
				<Cart />
			</Stack>
		</div>
	);
}
export default App;
