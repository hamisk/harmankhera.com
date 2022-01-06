import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Home />
				<NavMenu />
                <Routes>
                    <Route path="/" element={<Portfolio />} />
					<Route exact path="/bandsite" render={() => {window.location.href="index.html"}} />
					<Route exact path="/coffeeshop" render={() => {window.location.href="index.html"}} />
					<Route exact path="/hackathon" render={() => {window.location.href="index.html"}} />
					<Route exact path="/travelsite" render={() => {window.location.href="index.html"}} />
                </Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
