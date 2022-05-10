import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Button from './components/Button/Button.js'
import './App.scss';
import Tutorials from './pages/Tutorials/Tutorials';
import ToDo from './pages/ToDo/ToDo';

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
				{/* <Home scroll={scroll} /> */}
				<NavMenu scroll={scroll}/>
				<Routes>
					<Route path="/" element={<><Home scroll={scroll}/> <Portfolio /></>} />
					<Route path='/portfolio' element={ <Portfolio /> } />
					<Route path="/bandsite" />
					<Route path="/coffeeshop" />
					<Route path="/hackathon" />
					<Route path="/travelsite" />
					<Route path="/brainflix" />
					<Route path="/instock" />
					<Route path="/tutorials" element={ <Tutorials/> } />
					<Route path="/todo" element={ <ToDo/> } />
				</Routes>
				
			</div>
		</BrowserRouter>
	);
}

export default App;
