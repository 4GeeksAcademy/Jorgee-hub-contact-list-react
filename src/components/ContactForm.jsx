import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ContactForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (isEditing) {
            const fetchContact = async () => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Jorgee-hub/contacts/${id}`);
                    const data = await response.json();
                    setContact({
                        fullName: data.name,
                        email: data.email,
                        phone: data.phone,
                        address: data.address
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            fetchContact();
        }
    }, [id]);

    const handleSave = async () => {
        try {
            const url = isEditing
                ? `https://playground.4geeks.com/contact/agendas/Jorgee-hub/contacts/${id}`
                : "https://playground.4geeks.com/contact/agendas/Jorgee-hub/contacts";

            const method = isEditing ? "PUT" : "POST";

            const response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: contact.fullName,
                    email: contact.email,
                    phone: contact.phone,
                    address: contact.address
                })
            });
            const data = await response.json();
            console.log(data);

            setContact({
                fullName: "",
                email: "",
                phone: "",
                address: ""
            });

            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="container mt-4">
                <h2 className="text-center fw-bold mb-4">
                    {isEditing ? "Edit contact" : "Add a new contact"}
                </h2>
                <div className="mb-3">
                    <label className="form-label fw-bold">Full Name</label>
                    <input type="text" name="fullName" placeholder="Full Name" className="form-control" value={contact.fullName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" name="email" placeholder="Email" className="form-control" value={contact.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Phone</label>
                    <input type="tel" name="phone" placeholder="Phone Number" className="form-control" value={contact.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Address</label>
                    <input type="text" name="address" placeholder="Address" className="form-control" value={contact.address} onChange={handleChange} />
                </div>
                <button onClick={handleSave} className="btn btn-primary w-100">save</button>
                <Link to="/" className="d-block mt-2">or get back to contacts</Link>
            </div>
        </div>
    );
};

export default ContactForm;