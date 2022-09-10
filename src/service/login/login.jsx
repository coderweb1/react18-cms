import wsRequest from '../index';

const LoginAPI = {
	AccountLogin: '/login',
	UserInfo: '/users/',
	UserMenus: '/role/'
};

export function accountLoginRequest(account) {
	return wsRequest.post({
		url: LoginAPI.AccountLogin,
		data: account
	});
}

export function getUserById(id) {
	return wsRequest.get({
		url: LoginAPI.UserInfo + id
	});
}

export function getUserMenus(id) {
	return wsRequest.get({
		url: `${LoginAPI.UserMenus + id}/menu`
	});
}
