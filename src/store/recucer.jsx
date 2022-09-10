import { combineReducers } from 'redux-immutable';
import { reducer as login } from './login/index';

const cReducer = combineReducers({
	login
});

export default cReducer;
