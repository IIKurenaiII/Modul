import React from 'react';
import HomePage from './Pages/HomePage';
import Page2 from './Pages/Page2';
import './Styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/page2' element={<Page2 />} />
			</Routes>
		</Router>
	);
};

export default App;
