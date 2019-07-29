import axios from 'axios';

export const GET_FOOD_BY_ID = 'GET_FOOD_BY_ID';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export const getFoodById = (id) => async (dispatch) => {
	dispatch({type:LOADING});
	const url = process.env.REACT_APP_API_URL+`get_food_by_id?food_id=${id}`;
	const respone = await axios.get(url);
	dispatch({type:GET_FOOD_BY_ID,payload:respone.data});
	dispatch({type:LOADED});
}


