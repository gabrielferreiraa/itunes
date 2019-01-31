import axios from 'axios';
import global from '../global';

export default ({ method, url, ...options }) =>
	axios({
		headers: {
			'Content-Type': 'application/json'
		},
		url: `${global.apiHost}${url}`,
		method,
		...options
	}).then(resp => resp.data);
