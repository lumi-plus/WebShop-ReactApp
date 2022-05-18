import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import CartPage from "./pages/Cart_page";
import LoginPage from "./pages/Login_page";

import Header from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/man" element={<Man />} />
					<Route path="/woman" element={<Woman />} />
					<Route path="/sale" element={<Sale />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
	function Home() {
		return <h2>Home</h2>;
	}

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
