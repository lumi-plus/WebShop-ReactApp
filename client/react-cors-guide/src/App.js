import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Cart_page from "./pages/Cart_page";
import Login_page from "./pages/Login_page";

import { Stack } from "react-bootstrap";
import Header from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<div>defrfrf</div>
				<Routes>
					<Route path="/Man" element={<Man />} />
					<Route path="/Woman" element={<Woman />} />
					<Route path="/Sale" element={<Sale />} />
					<Route path="/login" element={<Login_page />} />
					<Route path="/Cart" element={<Cart_page />} />
				</Routes>
			</BrowserRouter>
		</div>
	);

	function Man() {
		return <h2>Man</h2>;
	}

	function Woman() {
		return <h2>Woman</h2>;
	}

	function Sale() {
		return <h2>Sale</h2>;
	}
}
export default App;
