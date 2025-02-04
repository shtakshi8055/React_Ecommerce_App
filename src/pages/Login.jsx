import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../components";
import SnackbarAlert from "../components/SnackBarAlert";

const Login = () => {

  const [user, setUser] = useState({ email: "", password: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in by fetching their data from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      // If user is already logged in, redirect to homepage/dashboard
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = existingUsers.find((u) => u.email === user.email && u.password === user.password);

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); // Store logged-in user data
      setSnackbar({ open: true, message: "Login successful!", severity: "success" });
      navigate("/"); // Redirect to homepage or dashboard
    } else {
      setSnackbar({ open: true, message: "Invalid credentials!", severity: "error" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SnackbarAlert open={snackbar.open} message={snackbar.message} severity={snackbar.severity} handleClose={handleCloseSnackbar} />
      <Footer />
    </>
  );
};

export default Login;
