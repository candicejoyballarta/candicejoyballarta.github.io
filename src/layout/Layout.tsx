import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='flex-1 pb-5 md:pb-7 lg:pb-10'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
