import * as api from "../../API.js";
import { Container, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { CustomerContext } from "../../App";

//cartitem får et id fra cart

export default function CartItem (props){
    const { item} = props;
    const itemId = item.itemId;


    const [product,setProductInfo] = useState(api.getItem(itemId).then((p) => setProductInfo(p)));

    return(
        <div> {product.itemName} , {product.itemPrice}</div>
    )
}