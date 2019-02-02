import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Footer from 'components/Footer';
import GlobalStyle from 'components/GlobalStyle';
import Container from 'components/Container';
import Routes from 'routes';

import * as serviceWorker from './serviceWorker';

const AppRouter = () => (
	<Router>
		<Fragment>
			<Container>
				<Routes />
			</Container>
			<GlobalStyle />
			<Footer />
		</Fragment>
	</Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
