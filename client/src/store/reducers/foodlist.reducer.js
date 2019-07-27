import {GET_DATA,LOADING,LOADED,FETCH_USER} from '../actions/foodlist.action';

const initialState={
	loading:false,
	foodData:[],
	user: {}
}
const foodlistReducer = (state=initialState,action) => {
	switch (action.type) {
		case LOADING:
			return {...state,loading:true};

		case LOADED:
			return {...state,loading:false};

		case GET_DATA:
			return {...state,foodData:action.payload.data};

		case FETCH_USER:
			return {...state,user:action.payload.user }
			
	  	default:
	  		return state;
	}

}

export default foodlistReducer;