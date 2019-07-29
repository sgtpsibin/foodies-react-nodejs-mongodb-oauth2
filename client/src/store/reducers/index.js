import foodlistReducer from './foodlist.reducer';
import foodpageReducer from './foodpage.reducer';

import {combineReducers} from 'redux';

export default combineReducers({
	foodlist: foodlistReducer,
	foodpage: foodpageReducer
});