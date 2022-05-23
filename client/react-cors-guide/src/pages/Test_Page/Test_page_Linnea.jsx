import Carousel_Product from "../../components/Carousel/Carousel";
import Product_Info_Card from "../../components/Product_info_card/Product_Info_Card";
import { Container, Row, Col, Grid, Card, Button } from "react-bootstrap";
import "./Test_page_Linnea.css";

// Needs to fetch product id and it's attrubtes

const Test_Page = () => {
  return (
    <div>
      <Container>
        <Row styleClass="row">
          <Col sm={7}>
            <Carousel_Product />
          </Col>
          <Col sm={5}>
            <Row>
              <h1>Helena</h1>
              <h1>178€</h1>
              <Product_Info_Card />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Test_Page;
