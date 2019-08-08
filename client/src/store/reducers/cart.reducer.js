import {ADD_TO_CART} from '../actions/cart.action';
const initialState = {
    cart: []
}
const cartReducer = (state=initialState,action) => {    
    switch (action.type) {
        case ADD_TO_CART:
                    state.cart.push({
                        food_name: action.payload.food_name,
                        food_count: action.payload.food_count,
                        food_description: action.payload.food_description,
                        food_image: action.payload.food_image,
                        food_price: action.payload.food_price,
                        food_sum_price: action.payload.food_sum_price,
                    });
                    // console.log(state.cart);
            return state;
        default:
            return state;
    }
}
export default cartReducer;