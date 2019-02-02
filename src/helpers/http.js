import axios from 'axios';
import global from 'helpers/global';

export default ({ url, ...options }) =>
	fetch(`${global.apiHost}${url}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		...options
	}).then(resp => resp.json());
