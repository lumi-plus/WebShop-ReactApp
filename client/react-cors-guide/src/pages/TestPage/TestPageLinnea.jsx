import Carousel_Product from "../../components/Carousel/Carousel";
import Product_Info_Card from "../../components/Product_info_card/ProductInfoCard";
import { Container, Row, Col, Grid, Card, Button } from "react-bootstrap";
import { useState, useEffect,useContext } from "react";
import "./TestPageLinnea.css";
import { CustomerContext } from "../../App";

// Needs to fetch product id and it's attrubtes

const Test_Page = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");


  
  

  // console.log(id);
  // const [itemId, setItemId] = useState();
  // setItemId(id);   //!!!!!!!!!!!!!!!!

  // useEffect(() => {
  // 	setItemId();
  // }, []);

  return (
    <div>
      <Container>
        <Row styleClass="row">
          <Col sm={6}>
            <Carousel_Product id={id} />
          </Col>
          <Col sm={6}>
            <Row>
              <Product_Info_Card id={id} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Test_Page;
