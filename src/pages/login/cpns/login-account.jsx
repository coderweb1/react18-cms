import React, { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, message } from 'antd';

import localCache from '@/utils/cache';

import { accountLoginAction } from '../../../store/login';

const loginAccount = forwardRef((props, ref) => {
	const formRef = useRef();
	const dispatch = useDispatch();

	useImperativeHandle(
		ref,
		() => ({
			accountLoginAction(isKeep) {
				formRef.current
					.validateFields()
					.then((value) => {
						// console.log(value);

						dispatch(accountLoginAction(value));
						switch (isKeep) {
							case true:
								localCache.setCache('name', value.name);
								localCache.setCache('password', value.password);
								break;
							case false:
								localCache.deleteCache('name');
								localCache.deleteCache('password');
								break;
							default:
						}
					})
					.catch((err) => {
						const errors = err.errorFields?.reduce((pre, cur) => {
							console.log(pre, '111', cur.errors[0]);
							pre.push(cur.errors[0]);
							return pre;
						}, []);
						// console.log(, 'errors');
						message.info(errors?.toString() || '输入错误');
					});
			}
		}),
		[formRef.current]
	);

	return (
		<Form ref={formRef} name="basic">
			<Form.Item
				name="name"
				label="账号"
				// labelAlign="left"
				validateTrigger="onBlur"
				rules={[
					{
						required: true,
						message: '必须输入账号'
					},
					{
						pattern: /^[a-z0-9]{6,20}$/,
						message: '必须是6~20个字母或者数字'
					}
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name="password"
				label="密码"
				validateTrigger="onBlur"
				rules={[
					{
						required: true,
						message: '请输入密码'
					},
					{
						pattern: /^[a-z0-9]{3,}$/,
						message: '必须是3位以上字母或数字'
					}
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item valuePropName="checked"></Form.Item>
		</Form>
	);
});

export default loginAccount;
