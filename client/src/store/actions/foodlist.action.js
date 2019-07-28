import axios from 'axios';


export const GET_DATA = 'GET_DATA';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';
export const FETCH_USER = 'FETCH_USER'

export const getData = (url) => async (dispatch) =>{
	dispatch({type:LOADING});	
	const respone = await axios.get(url);
	dispatch({type:GET_DATA,payload:{data:respone.data}});
	dispatch({type:LOADED});
};


export const fetchUser = (url) => async (dispatch) => {


	const user = await axios.get(url);
	dispatch({type:FETCH_USER,payload:{user:user.data}});

}
