import {ADD_TO_CART} from '../actions/cart.action';
const initialState = {
    cart: []
}
const cartReducer = (state=initialState,action) => {    
    switch (action.type) {
        case ADD_TO_CART:
                    state.cart.push({
                        foodName: action.payload.itemObject.foodName,
                        foodCount: action.payload.itemObject.foodCount,
                        foodSumPrice: action.payload.itemObject.foodSumPrice,
                    });
            return state;
        default:
            return state;
    }
}
export default cartReducer;