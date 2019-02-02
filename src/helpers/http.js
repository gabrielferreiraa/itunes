import global from 'helpers/global';

export default ({ url, ...options }) =>
	fetch(`${global.apiHost}${url}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		...options
	}).then(resp => resp.json());
