import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import './App.scss';

const App: React.FC = () => {

	const scroll = (id: string) => {
        const section = document.querySelector( id );
        if (section) {
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }
    };

	return (
		<BrowserRouter>
			<div className="App">
				<Home scroll={scroll} />
				<NavMenu scroll={scroll}/>
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
