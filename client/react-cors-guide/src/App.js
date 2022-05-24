import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import * as api from "./API.js";

import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/TestPage/TestPageLinnea";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Herobanner from "./components/Herobanner/Herobanner";

export const CustomerContext = createContext();
function App() {
	const [customer, setCustomer] = useState({
		id: createId(),
		firstName: "",
		lastName: "",
		email: "",
		loggedIn: false,
		basket: [1, 1, 1],
	});
	useEffect(() => {
		if (!customer.loggedIn) {
			createCustomer(customer);
		}
	});
	async function createCustomer(customer) {
		await api.createCustomer(customer);
	}

	return (
		<CustomerContext.Provider value={[customer, setCustomer]}>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/man" element={<Man />} />
						<Route path="/woman" element={<Woman />} />
						<Route path="/sale" element={<Sale />} />
						<Route path="/product" element={<Product />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</CustomerContext.Provider>
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
		return <Herobanner />;
	}

	function createId() {
		return getRandomInt(0, 10000);
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
export default App;
