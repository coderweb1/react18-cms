import React, { memo, useRef, useState } from 'react';

import { Tabs, Checkbox, Button, message } from 'antd';

import { PhoneOutlined, UserOutlined } from '@ant-design/icons';

import LoginAccount from './login-account';

const { TabPane } = Tabs;

const LoginCanel = memo(() => {
	const accountRef = useRef();

	const currentTab = useRef('account');

	const [isKeep, changeIsKeep] = useState(false);

	const onisKeep = () => {
		changeIsKeep(!isKeep);
	};

	const changeActivekey = (activeKey) => {
		currentTab.current = activeKey;
	};

	const onLogin = (e) => {
		switch (currentTab.current) {
			case 'account':
				accountRef.current.accountLoginAction(isKeep);
				break;
			case 'phone':
				message.info('以后再写');
				break;
			default:
		}

		console.log('11111');
	};

	return (
		<div style={{ width: '330px', marginBottom: '150px' }}>
			<h1 style={{ textAlign: 'center', margin: '21.44px 0' }}>博客登录</h1>
			<div
				style={{
					background: '#fff',
					border: '1px solid #dcdfe6',
					boxShadow: '0 2px 4px 0 rgb(0 0 0/12%), 0 0 6px 0 rgb(0 0 0 /4%)'
				}}
			>
				<Tabs defaultActiveKey="1" type="card" onChange={changeActivekey}>
					<TabPane
						tab={
							<span>
								<UserOutlined />
								账号登陆
							</span>
						}
						key="account"
					>
						<LoginAccount ref={accountRef} />
					</TabPane>
					<TabPane
						tab={
							<span>
								<PhoneOutlined />
								手机登录
							</span>
						}
						key="phone"
					>
						Content of Tab Pane 2
					</TabPane>
				</Tabs>
			</div>
			<div>
				<Checkbox checked={isKeep} onChange={onisKeep}>
					记住密码
				</Checkbox>
			</div>
			<Button type="primary" shape="round" onClick={onLogin}>
				登录
			</Button>
		</div>
	);
});

export default LoginCanel;
