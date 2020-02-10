import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import ShopPgae from './pages/shop/shop.component';


function App() {
  return (
    <div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPgae} />
			</Switch>
    </div>
  );
}

export default App;
