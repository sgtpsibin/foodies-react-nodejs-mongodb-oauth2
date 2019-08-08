import axios from 'axios';
export const GET_USER = 'GET_USER';

export const getUser = (userAPIURL) => async (dispatch) => {
    const user = await axios.get(userAPIURL);
    dispatch({type:GET_USER,payload:user.data});
}