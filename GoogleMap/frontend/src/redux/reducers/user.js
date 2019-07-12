import {
    SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE
} from '../action';

const INITAL_STATE = {
    user: null,
    error: null,
};

export default function( state = INITAL_STATE, action) {
    switch(action.type) {
        case SIGNIN_USER: {    
            return {...state, error:null};
        }
        case SIGNIN_USER_SUCCESS: {
            return {...state, user:action.payload, error:null}
        }
        case SIGNIN_USER_FAILURE:
            return {...state, user:null, error:action.payload};
        default:
            return state;   
    }
}