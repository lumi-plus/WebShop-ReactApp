import "./App.css";

import { Stack } from "react-bootstrap";
import Header from "./components/Navbar/Navbar";

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
			<Header />
		</div>
	);
}
export default App;
