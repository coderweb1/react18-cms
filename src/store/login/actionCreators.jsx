import { accountLoginRequest, getUserById, getUserMenus } from '@/service/login/login';

import localCache from '@/utils/cache';

export const saveToken = (token) => ({
	type: 'saveToken',
	token
});

export const saveUserInfo = (userInfo) => ({
	type: 'saveUserInfo',
	userInfo
});

export const saveUserMenus = (userMenus) => ({
	type: 'saveUserMenus',
	userMenus
});

export const accountLoginAction = (account) => {
	return async (dispatch) => {
		const loginResult = await accountLoginRequest(account);
		const { id, token } = loginResult;
		dispatch(saveToken(token));
		console.log(id);
		localCache.setCache('token', token);

		const userInfo = await getUserById(id);
		console.log(userInfo);

		localCache.setCache('userInfo', userInfo);

		dispatch(saveUserInfo(userInfo));

		const userMenus = await getUserMenus(userInfo.role.id);
		console.log(userMenus);
		dispatch(saveUserMenus(userMenus));
		localCache.setCache('userMenus', userMenus);
	};
};
