import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const getContacts = async () => {
		try {
			const response = await fetch("https://playground.4geeks.com/contact/agendas/Jorgee-hub/contacts");
			const data = await response.json();
			dispatch({ type: "add_contacts", payload: data.contacts })
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getContacts();
	}, []);

	return (
		<div className="mt-5">
			{store.contacts.map((contact, index) => {
				return (
					<ContactCard key={contact.id} item={contact} />
				)
			})}
		</div>
	);
};