import * as api from "../../API.js";
import { Container, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { CustomerContext } from "../../App";
import CartItem from "./CartItem.jsx";

export default function Cart() {
	const [customerGlobal, setCustomerGlobal] = useContext(CustomerContext);
	// const [products, setBasket] = useState(api.getBasket(customerGlobal.id).then(p => setBasket(p)));
	const [products, setBasket] = useState([]);
	useEffect(() => {
		  fetchData();
		}, []);
  
		const fetchData = () => {
		api.getBasket(customerGlobal.id).then((p) => setBasket(p))
			.catch((error) => {
			  console.log(error);
			});
		};

		async function addToBasket(idd) {
			await api.addItemToBasket(customerGlobal.id,idd,1);
			setCustomerGlobal(customerGlobal);
			fetchData();

			}
		
		  async function removeFromBasket(idd) {
			await api.addItemToBasket(customerGlobal.id,idd,-1);
			setCustomerGlobal(customerGlobal);
			fetchData();
			}
		
	
	return (
		<>
			<div>
				<Container>
					{/* <Button variant="outline-secondary" onClick={getBasket}>
						Show basket
					</Button> */}

					{Array.from(products)?.map((item, i) => (
						<div key={i}>
							<span>
								itemID: {item.itemId} , ItemQuantity: {item.itemQuantity}&nbsp;
								&nbsp; info:
								<CartItem key={item.itemId} item={item}></CartItem>
								<Button variant="outline-warning" onClick={()=>addToBasket(item.itemId)}>
									Add item
								</Button>
								<Button variant="outline-danger" onClick={()=>removeFromBasket(item.itemId)}>
									Delete item
								</Button>
							</span>
						</div>
					))}
				</Container>
			</div>
		</>
	);
	// const addToBasket = async () => {
	// 	fetch(`http://localhost:4000/basket/${user.id}/product/${prodID}`, {
	// 		method: "PUT",
	// 	});
	// 	alert(`${product.name} has been added to basket`);
	// };
}
