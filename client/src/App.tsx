import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import './App.scss';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Home />
				<NavMenu />
				<Routes>
					{/* <Route path="/" element={<Home/>} /> */}
					<Route path="/bandsite" />
					<Route path="/coffeeshop" />
					<Route path="/hackathon" />
					<Route path="/travelsite" />
					<Route path="/brainflix" />
					<Route path="/instock" />
				</Routes>
				<Portfolio />
			</div>
		</BrowserRouter>
	);
}

export default App;
