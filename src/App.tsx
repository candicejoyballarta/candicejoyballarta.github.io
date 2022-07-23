import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutMe />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
