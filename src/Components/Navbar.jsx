import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__name'>Фетько Юрій</div>
			<div className='navbar__links'>
				<Link to='/'>
					<button>Home</button>
				</Link>
				<Link to='/page2'>
					<button>Page 2</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
