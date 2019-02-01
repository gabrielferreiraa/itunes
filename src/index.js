import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';
import * as serviceWorker from './serviceWorker';

const AppRouter = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={App} />
			<Route path="/artist/:artistId" component={() => <h2>artist</h2>} />
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
