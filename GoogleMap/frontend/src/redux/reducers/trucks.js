import {
    GET_TRUCKS_SUCCESS, GET_TRUCKS_FAILURE
} from '../action';

const INITAL_STATE = {
    positions: null,
    error: null,
};

export default function( state = INITAL_STATE, action) {
    switch(action.type) {
        case GET_TRUCKS_SUCCESS: {
            return {...state, positions:action.payload, error:null};
        }
        case GET_TRUCKS_FAILURE:
            return {...state, positions:null, error:action.payload};
        default:
            return state;
    }
}