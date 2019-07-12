import { combineReducers } from 'redux';
import userReducer from './user';
import trucksReducer from './trucks';

const rootReducer = combineReducers({
    user: userReducer,
    trucks: trucksReducer,
});

export default rootReducer;