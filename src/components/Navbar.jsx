import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<h1 className="text-dark ">Contact List</h1>
					<Link to="/AddNewContact" className="btn btn-dark icon-grow">
						Add new contact
					</Link>
				</div>
			</nav>

		</div>
	);
};