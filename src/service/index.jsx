import WSRequest from './request/request';
import { API_BASE_URL, TIME_OUT } from './request/config';
import localCache from '@/utils/cache';

const wsRequest = new WSRequest({
	baseURL: API_BASE_URL,
	timeout: TIME_OUT,
	interceptorHooks: {
		requestInterceptor: (config) => {
			const token = localCache.getCache('token');
			if (token) {
				// eslint-disable-next-line no-param-reassign
				config.headers.Authorization = `Bearer ${token}`;
			}

			console.log('实例');
			return config;
		},
		requestInterceptorCatch: (err) => {
			return err;
		},
		responseInterceptor: (res) => {
			return res.data;
		},
		responseInterceptorCatch: (err) => {
			return err;
		}
	}
	// showLoading: false
});

export default wsRequest;
