export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

export const GET_TRUCKS_REQUEST = 'GET_TRUCKS_REQUEST';
export const GET_TRUCKS_SUCCESS = 'GET_TRUCKS_SUCCESS';
export const GET_TRUCKS_FAILURE = 'GET_TRUCKS_FAILURE';


export function signIn(userdata) {
    return {
        type: SIGNIN_USER,
        payload: userdata,
    };
}

export function signInSucess(user) {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: user
    }
}

export function signInFailure(error) {
    return {
        type: SIGNIN_USER_FAILURE,
        payload: error
    }
}

export function getTrucks(ids){
    return {
        type: GET_TRUCKS_REQUEST,
        payload: ids,
    };
}

export function getTrucksSuccess(trucks){
    return {
        type: GET_TRUCKS_SUCCESS,
        payload: trucks,
    };
}

export function getTrucksFail(error) {
    return {
        type: GET_TRUCKS_FAILURE,
        payload: error,
    };
}