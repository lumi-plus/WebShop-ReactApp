import React, { render, useState,useContext } from "react";
import "./ProductInfoCard.css";
import { Container, Row, Col, Grid, Card, Button } from "react-bootstrap";
import Size_Filter from "../SizeFilter/SizeFilter";
import Button_Counter from "../Button_Counter/Button_Counter";
import * as api from "../../API.js";
import { CustomerContext } from "../../App";


const Product_Info_Card = ({ id }) => {
  const [product, setProduct] = useState(
    api.getItem(id).then((p) => setProduct(p))
  );
  const [customerGlobal, setCustomerGlobal] = useContext(CustomerContext);

  async function addToBasket() {
    await api.addItemToBasket(customerGlobal.id,product.itemId,1);
	}

  async function removeFromBasket() {
    await api.addItemToBasket(customerGlobal.id,product.itemId,-1);
	}


  return (
    <Card className="product_card">
      <Card.Body>
        <Card.Text className="card_body">{product.itemName}</Card.Text>
        <Card.Text className="card_body">{product.itemPrice}€</Card.Text>
        <Card.Text className="padding">
          <b>Details:</b> {product.itemDescription}{" "}
        </Card.Text>
        <Card.Text>
          <b>Color: </b> {product.itemColor}{" "}
        </Card.Text>
        <Size_Filter />
        <Button_Counter />
        <Button onClick={addToBasket}>Add to basket</Button>
        <Button onClick={removeFromBasket}>Remove from basket </Button>
      </Card.Body>
    </Card>
  );
};

export default Product_Info_Card;
