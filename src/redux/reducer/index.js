// import handleCart from './handleCart'
// import { combineReducers } from "redux";
// const rootReducers = combineReducers({
//     handleCart,
// })
// export default rootReducers

import { combineReducers } from "redux";
import handleCart from "./handleCart";
import authReducer from "./authReducer"; // Import authentication reducer

const rootReducers = combineReducers({
    handleCart,
    auth: authReducer, // Add authentication state to Redux
});

export default rootReducers;
