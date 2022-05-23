import { useContext } from "react";
import { UserContext } from "..//../App";
import "./UserGreetings.css";

export default function UserGreetings() {
	const customer = useContext(UserContext);
	const loggedIn = customer.loggedIn;
	if (loggedIn) {
		return (
			<h1 className="gtext">{`Hi ${customer.firstName}, End of the month?`}</h1>
		);
	}
	return <h1 className="gtext">End of the month?</h1>;
}
