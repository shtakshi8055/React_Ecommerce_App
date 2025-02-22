const initialState = {
    isLoggedIn: false,
    user: null, // Store user details when logged in
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return { isLoggedIn: true, user: action.payload };
      case "LOGOUT":
        return { isLoggedIn: false, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  