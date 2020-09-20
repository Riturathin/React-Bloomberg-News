import React from 'react';
import { Route } from 'react-router-dom';
import Resources from './components/Resources';
import Home from './components/Home';

const Routes = props => {
	return (
		<React.Fragment>
			<Route path='/' exact component={ Home } />
			<Route path='/home' exact component={ Resources } />
		</React.Fragment>
	)

}

export default Routes;