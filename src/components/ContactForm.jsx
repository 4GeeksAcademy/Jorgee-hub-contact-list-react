import { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        console.log(contact);
    };

    return (
        <div>
            <div className="container mt-4">
                <h2 className="text-center fw-bold mb-4">Add a new contact</h2>
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