import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages'
import SignInPage from './pages/signin';

const App = () =>{
	return(
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={SignInPage} />
			</Switch>
		</>
	)
}

export default App;