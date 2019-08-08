import {GET_USER} from '../actions/auth.action';

const initialState = {
    user: {}
}

const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_USER:           
            return {...state,user:action.payload}   
        default:
            return state;
    }
}

export default authReducer;