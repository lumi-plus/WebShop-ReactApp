import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Card,
	Label,
	Image,
	Link,
	Info,
	Title,
	Price,
	IconContainer,
} from "./styles/Item";
import * as Icon from "react-bootstrap-icons";

export default function Item(props) {
	const { item } = props;

	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/product/?id=${item.itemId}`;
		navigate(path);
	};
	const routeChange2 = () => {
		let path = `/cart`;
		navigate(path);
	};

	return (
		<Container>
			<Card>
				<Info>
					<Title>{item.itemName}</Title>
					<Price>{item.itemPrice}€</Price>

					<IconContainer onClick={routeChange2}>
						<Icon.CartFill />
					</IconContainer>
				</Info>

				<Label>{item.itemOnSale} </Label>
				<Image src={item.itemIMG} alt={item.itemName} onClick={routeChange} />
			</Card>
		</Container>
	);
}
