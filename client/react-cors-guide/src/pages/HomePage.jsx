import React from "react";
import "../globalStyles.css";
import Item from "../components/Item";
import data from "../db.json";

//HomePage works and now is displaying nothing because data is not passing trough +
// once data will be displayed we will need a list of items --> that's why the Items component is created for
export default function HomePage() {
	return (
		<div className="main-container">
			<div className="cards-container">
				{data.items.map((item) => (
					<Item key={item.itemId} item={item}></Item>
				))}
			</div>
		</div>
	);
}
