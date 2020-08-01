import React from 'react';
import Navbar from './Navbar';
import AllPosts from './Blog/Allposts';
import Home from './Home';

import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/blog'>
					<AllPosts />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
			<Navbar />
		</div>
	);
}

export default App;
