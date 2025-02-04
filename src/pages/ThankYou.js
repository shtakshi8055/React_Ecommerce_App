import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000); // Redirect to home after 5 seconds
  }, [navigate]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h2>Thank You for Shopping with Us!</h2>
      <p>Redirecting to the homepage...</p>
    </div>
  );
};

export default ThankYou;
