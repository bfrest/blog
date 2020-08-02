import React from 'react';
import Navbar from './Navbar';
import AllPosts from './Blog/Allposts';
import Home from './Home';
import PostView from './Blog/PostView';

import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/blog'>
					<AllPosts />
				</Route>

				<Route path='/:id' children={<PostView />} />
			</Switch>
			<Navbar />
		</div>
	);
}

export default App;
