// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product,
    };
};

// For Delete Item from Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product,
    };
};

// For Clearing Cart
export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    };
};
