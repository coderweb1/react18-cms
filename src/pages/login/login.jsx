import React, { memo } from 'react';

import LoginPanel from './cpns/login-canel';

import { Login } from './style';

const login = memo(() => {
	return (
		<Login>
			<LoginPanel />
		</Login>
	);
});

export default login;
