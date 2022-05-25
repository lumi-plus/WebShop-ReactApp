import React from "react";
import { useState, useContext, useEffect } from "react";
import { CustomerContext } from "../../App";
import * as api from "../../API.js";
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
	    const [customerGlobal, setCustomerGlobal] = useContext(CustomerContext);
	const customerid= customerGlobal.customerId;
	const itemid = item.itemId;
	const [basket,addToBasket] = useState(api.addItemToBasket(customerid,itemid,1).then(p => addToBasket(p)));

	return (
		<Container>
			<Card>
				<Label>{item.itemOnSale} </Label>
				<Link href={`/item/${item.itemId}`}></Link>

				<Image
					src={require("../../resources/images/WOMAN-3/3.1_woman.jpeg")}
					// src={require(`"${item.itemId.itemIMG.img1}"`)}
					alt={item.itemName}
				/>
				<Info>
					<Title>{item.itemName}</Title>
					<Price>{item.itemPrice}€</Price>
					<IconContainer>
						{item.itemId}
						<Icon.CartFill />
					</IconContainer>
				</Info>
			</Card>
		</Container>
	);
}
