import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import * as api from "./API.js";

import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/TestPage/TestPageLinnea";
import HomePage from "./pages/HomePage";
import ManPage from "./pages/ManPage";
import WomanPage from "./pages/WomanPage";
import Sale from "./pages/Sale";
import Navbar from "./components/Navbar/Navbar";

export const CustomerContext = createContext();
function App() {
	const [customer, setCustomer] = useState({
		id: createId(),
		firstName: "",
		lastName: "",
		email: "",
		loggedIn: false,
		basket: [
			{
				itemId: 15,
				itemQuantity: 1,
			},
			{
				itemId: 11,
				itemQuantity: 7,
			},
			{
				itemId: 20,
				itemQuantity: 20,
			},
		],
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
						<Route path="/man" element={<ManPage />} />
						<Route path="/woman" element={<WomanPage />} />
						<Route path="/sale" element={<Sale />} />
						<Route path="/product" element={<Product />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</CustomerContext.Provider>
	);

	function createId() {
		return getRandomInt(0, 1000000000000);
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
export default App;
