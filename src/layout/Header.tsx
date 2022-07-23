import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='content'>
			<div className='flex items-center text-zinc-700'>
				<Link to='/' className='font-semibold'>
					Candice Ballarta
				</Link>
				{/* <ul className='flex gap-5 ml-auto'>
					<li>
						<NavLink
							to='/'
							style={({ isActive }) =>
								isActive ? { fontWeight: 'bold' } : {}
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/about'
							style={({ isActive }) =>
								isActive ? { fontWeight: 'bold' } : {}
							}
						>
							About
						</NavLink>
					</li>
				</ul> */}
			</div>
		</header>
	);
};

export default Header;
