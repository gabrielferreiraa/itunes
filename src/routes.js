import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import App from 'containers/App';
import Artist from 'containers/Artist';

const Routes = () => (
	<Fragment>
		<Route exact path="/" component={App} />
		<Route path="/artist/:artistId" component={Artist} />
	</Fragment>
);

export default Routes;
