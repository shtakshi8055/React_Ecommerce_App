// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Navbar, Footer } from "../components";
// import SnackbarAlert from "../components/SnackBarAlert";

// const Register = () => {
//   const [user, setUser] = useState({ name: "", email: "", password: "" });
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const userExists = existingUsers.some((u) => u.email === user.email);

//     if (userExists) {
//       setSnackbar({ open: true, message: "User already exists! Please login.", severity: "error" });
//       navigate("/login");
//       return;
//     }

//     existingUsers.push(user);
//     localStorage.setItem("users", JSON.stringify(existingUsers));

//     setSnackbar({ open: true, message: "Registration successful! Redirecting...", severity: "success" });

//     setTimeout(() => {
//       navigate("/login");
//     }, 2000); // Delay redirection to show the snackbar message
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Register</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="my-3">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   placeholder="Your Name"
//                   value={user.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="my-3">
//                 <label>Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   placeholder="name@example.com"
//                   value={user.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="my-3">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   placeholder="Password"
//                   value={user.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="text-center">
//                 <button className="my-2 mx-auto btn btn-dark" type="submit">
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <SnackbarAlert open={snackbar.open} message={snackbar.message} severity={snackbar.severity} handleClose={handleCloseSnackbar} />
//       <Footer />
//     </>
//   );
// };

// export default Register;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../components";
import SnackbarAlert from "../components/SnackBarAlert";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's existing user data in localStorage when the component loads
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.length > 0) {
      // Optionally, you could prepopulate the form with the first user
      setUser(existingUsers[0]); // Or leave this if you want a blank form on load
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((u) => u.email === user.email);

    if (userExists) {
      setSnackbar({ open: true, message: "User already exists! Please login.", severity: "error" });
      navigate("/login");
      return;
    }

    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setSnackbar({ open: true, message: "Registration successful! Redirecting...", severity: "success" });

    setTimeout(() => {
      navigate("/login");
    }, 2000); // Delay redirection to show the snackbar message
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>
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
                  Register
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

export default Register;
