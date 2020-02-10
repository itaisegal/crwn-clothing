import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import ShopPgae from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
		<div>
			<Header/>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPgae} />
			</Switch>
    </div>
  );
}

export default App;
