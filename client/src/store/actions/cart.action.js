export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (cartItem) => (dispatch) => {
    dispatch({type:ADD_TO_CART,payload:cartItem});
}