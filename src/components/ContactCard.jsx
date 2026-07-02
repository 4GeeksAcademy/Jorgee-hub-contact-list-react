import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const ContactCard = ({ item }) => {
  const { dispatch } = useGlobalReducer();
  const [showConfirm, setShowConfirm] = useState(false);

  const confirmDelete = async () => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/jorgee-hub/contacts/${item.id}`, {
        method: "DELETE"
      });
      if (!response.ok) throw new Error(`Error al borrar: ${response.status}`);
      dispatch({ type: "delete_contact", payload: item.id });
    } catch (error) {
      console.log(error);
    }
    setShowConfirm(false);
  };

  return (
    <div className="d-flex align-items-center border-bottom py-3">
      <img
        src={item.image || "https://placehold.co/90"}
        alt={item.name}
        className="rounded-circle me-4"
        style={{ width: "90px", height: "90px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/90";
        }}
      />
      <div>
        <h5 className="mb-1">{item.name}</h5>
        <p className="mb-1 text-muted">
          <i className="fa-solid fa-location-dot me-2"></i> {item.address}
        </p>
        <p className="mb-1 text-muted">
          <i className="fa-solid fa-phone me-2"></i> {item.phone}
        </p>
        <p className="mb-0 text-muted">
          <i className="fa-solid fa-envelope me-2"></i> {item.email}
        </p>
      </div>
      <Link to={`/EditContact/${item.id}`} className="btn btn-link ms-auto">
        <i className="fa-solid fa-pen"></i>
      </Link>
      <button className="btn btn-link" onClick={() => setShowConfirm(true)}>
        <i className="fa-solid fa-trash"></i>
      </button>
      {showConfirm && (
        <div
          className="card shadow position-fixed"
          style={{
            width: "350px",
            zIndex: 1000,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold mb-0">Are you sure?</h6>
              <button
                className="btn btn-sm p-0 border-0"
                onClick={() => setShowConfirm(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <p className="text-muted small">
              The change will be permanent.
            </p>
            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowConfirm(false)}
              >
                No
              </button>
              <button
                className="btn btn-dark btn-sm"
                onClick={confirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;