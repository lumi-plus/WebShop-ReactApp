import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import CartPage from "./pages/Cart_page";
import LoginPage from "./pages/Login_page";
import Product from "./pages/Test_Page/Test_page_Linnea";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Herobanner from "./components/Herobanner/Herobanner";

function App() {
	const [customer, setCustomer] = useState({
		id: createId(),
		firstName: "",
		secondName: "",
		email: "",
		loggedIn: false,
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Greeting customer={customer} />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/man" element={<Man />} />
					<Route path="/woman" element={<Woman />} />
					<Route path="/sale" element={<Sale />} />
					<Route path="/product" element={<Product />} />
					<Route
						path="/login"
						element={
							<LoginPage
								setRootCustomer={setCustomer}
								customerId={customer.id}
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
		return <Herobanner />;
	}

	function Greeting({ customer }) {
		const loggedIn = customer.loggedIn;
		if (loggedIn) {
			return <h1>{`Hi ${customer.firstName}`}</h1>;
		}
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
