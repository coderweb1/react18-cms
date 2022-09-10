import React, { memo } from 'react';
import { Provider } from 'react-redux';

import { Routerview } from './router';

import store from './store';

import { HashRouter as Router } from 'react-router-dom';

import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

const App = memo(() => {
	return (
		<Provider store={store}>
			<ConfigProvider locale={zhCN}>
				<Router>
					<Routerview />
				</Router>
			</ConfigProvider>
		</Provider>
	);
});

export default App;
