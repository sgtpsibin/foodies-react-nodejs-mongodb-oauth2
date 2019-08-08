import foodlistReducer from './foodlist.reducer';
import foodpageReducer from './foodpage.reducer';
import cartReducer from './cart.reducer';
import {combineReducers} from 'redux';

export default combineReducers({
	foodlist: foodlistReducer,
	foodpage: foodpageReducer,
	cart: cartReducer
});