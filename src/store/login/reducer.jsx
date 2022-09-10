import { Map } from 'immutable';

const initialLogin = Map({
	token: '',
	userInfo: {},
	userMenus: {},
	permissions: []
});
// eslint-disable-next-line default-param-last
function loginReducer(state = initialLogin, action) {
	switch (action.type) {
		case 'saveToken':
			return state.set('token', action.token);
		case 'saveUserInfo':
			return state.set('userInfo', action.userInfo);

		case 'saveUserMenus':
			return state.set('userMenus', action.userMenus);
		default:
			return state;
	}
}

export default loginReducer;
