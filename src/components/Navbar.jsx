import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<Link to="/AddNewContact" className="btn btn-success ms-auto">
						Add new contact
					</Link>
				</div>
			</nav>

		</div>
	);
};