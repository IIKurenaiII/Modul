import React from 'react';
import Navbar from '../Components/Navbar';
import Misto from '../Components/MIsto';
import Footer from '../Components/Footer';

const HomePage = () => {
	return (
		<div className='homepage'>
			<Navbar />
			<Misto />
			<Footer />
		</div>
	);
};

export default HomePage;
