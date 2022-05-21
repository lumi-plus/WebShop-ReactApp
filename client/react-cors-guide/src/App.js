import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import CartPage from "./pages/Cart_page";
import LoginPage from "./pages/Login_page";

import Navbar from "./components/Navbar/Navbar";

function App() {
	const [customerFistName, setUser] = useState("Jesse");

	const [name, updateName] = useState("James");

	function updateFirstName(e) {
		setUser(e.target.value);
		console.log(customerFistName);
	}

	const changeName = (newName) => {
		updateName([...name, newName]);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/man" element={<Man />} />
					<Route path="/woman" element={<Woman />} />
					<Route path="/sale" element={<Sale />} />
					<Route
						path="/login"
						element={
							<LoginPage
								customerFistName={customerFistName}
								changeName={changeName}
								name={name}
								updateFirstName={updateFirstName}
							/>
						}
					/>
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
