import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Home />
				<NavMenu />
                <Routes>
                    {/* <Route path="/" element={<Home/>} /> */}
					<Route path="/bandsite" render={() => {window.location.href="index.html"}} />
					<Route path="/coffeeshop" render={() => {window.location.href="index.html"}} />
					<Route path="/hackathon" render={() => {window.location.href="index.html"}} />
					<Route path="/travelsite" render={() => {window.location.href="index.html"}} />
					<Route path="/brainflix" render={() => {window.location.href="index.html"}} />
					<Route path="/instock" render={() => {window.location.href="index.html"}} />
                </Routes>
				<Portfolio />
			</div>
		</BrowserRouter>
	);
}

export default App;
