import axios from 'axios';

import { message, Spin } from 'antd';
import ReactDOM from 'react-dom/client';

let requestCount = 0;

let hideload = false;

// 显示loading
function showLoading() {
	if (requestCount === 0) {
		const dom = document.createElement('div');
		dom.setAttribute('id', 'loading');
		document.body.appendChild(dom);

		// eslint-disable-next-lirender(
		// eslint-disable-nextne react/react-in-jsx-scope
		ReactDOM.createRoot(dom).render(
			// eslint-disable-next-line react/react-in-jsx-scope
			<Spin tip="加载中" size="large" />
		);

		console.log('showLoading');
	}
	// eslint-disable-next-line no-plusplus
	requestCount++;
}

// 隐藏loading
function hideLoading() {
	// eslint-disable-next-line no-plusplus
	requestCount--;
	if (requestCount === 0) {
		document.body.removeChild(document.getElementById('loading'));
	}
	console.log('hideLoading');
}

// 选择需要观察变动的节点
const targetNode = document.querySelector('body');

// 观察器的配置（需要观察什么变动）
const config1 = { childList: true };

// 当观察到变动时执行的回调函数
const callback = (mutationsList, observer) => {
	// Use traditional 'for loops' for IE 11
	// for (const mutation of mutationsList) {
	// 	if (mutation.type === 'childList') {
	// 		console.log('A child node has been added or removed.');
	// 	} else if (mutation.type === 'attributes') {
	// 		console.log(`The ${mutation.attributeName} attribute was modified.`);
	// 	}
	// console.log(mutationsList);
	console.log('监听loding', mutationsList);
	console.log(document.getElementById('loading'));
	// eslint-disable-next-line no-unused-expressions
	// document.getElementById('loading') && hideload
	// 	? (hideLoading(), (hideload = false), console.log('flase'))
	// 	: null;
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
observer.observe(targetNode, config1);

// 之后，可停止观察
// observer.disconnect();

class WSRequest {
	constructor(options) {
		this.config = options;
		this.interceptorHooks = options.interceptorHooks;
		this.showLoading = options.showLoading ?? true;
		this.instance = axios.create(options);

		this.setupInterceptor();
	}

	setupInterceptor() {
		this.instance.interceptors.request.use(
			this.interceptorHooks?.requestInterceptor,
			this.interceptorHooks?.requestInterceptorCatch
		);
		this.instance.interceptors.response.use(
			this.interceptorHooks?.responseInterceptor,
			this.interceptorHooks?.responseInterceptorCatch
		);

		this.instance.interceptors.request.use((config) => {
			if (this.showLoading) {
				showLoading();
				console.log('11111111111111111');
			}

			return config;
		});

		this.instance.interceptors.response.use(
			(res) => {
				// hideLoading();
				hideload = true;
				return res;
			},
			(err) => {
				// hideLoading();
				hideload = true;
				return err;
			}
		);
	}

	request(config) {
		if (!config.showLoading) {
			this.showLoading = false;
		}
		return new Promise((resolve, reject) => {
			this.instance
				.request(config)
				.then((res) => {
					resolve(res.data);
					this.showLoading = true;
				})
				.catch((err) => {
					reject(err);
					this.showLoading = true;
				});
		});
	}

	get(config) {
		return this.request({ ...config, method: 'GET' });
	}

	post(config) {
		return this.request({ ...config, method: 'POST' });
	}

	delete(config) {
		return this.request({ ...config, method: 'DELETE' });
	}

	patch(config) {
		return this.request({ ...config, method: 'PATCH' });
	}
}

export default WSRequest;
