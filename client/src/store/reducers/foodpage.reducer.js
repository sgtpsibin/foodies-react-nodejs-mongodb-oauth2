import {GET_FOOD_BY_ID,LOADING,LOADED} from '../actions/foodpage.action';

const initialState = {
	foodData: {},
	isLoading: false
}

const foodpageReducer = (state=initialState,action) => {
	switch (action.type) {
		case GET_FOOD_BY_ID:
			return {...state,foodData:action.payload};
		case LOADING:
			return {...state,isLoading:true};
		case LOADED: 
			return {...state,isLoading:false};
		
		default:
			return state;
	}
}

export default foodpageReducer;