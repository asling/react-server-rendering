import React,{ Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Test from './components/test';

export default class Routes extends Component{
	render(){
		return (
			<div>
				<Route path="/" component={Home} />
				<Route path="/test" component={Test} />
			</div>
		)
	}
}