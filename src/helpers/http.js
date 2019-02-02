import axios from 'axios';
import global from 'helpers/global';

export default ({ method, url, ...options }) =>
	axios({
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		},
		url: `${global.apiHost}${url}`,
		method,
		...options
	})
		.then(({ data }) => data)
		.catch(err => console.error(err.message));
