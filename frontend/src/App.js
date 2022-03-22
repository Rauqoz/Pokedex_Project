import { useEffect } from 'react';
import './App.css';
import RoutesMain from './components/routes/Routes.js';

function App() {
	useEffect(() => {
		if (window.sessionStorage.getItem('user_pk') === null) {
			window.sessionStorage.setItem('user_pk', '');
		}
	});
	return <RoutesMain />;
}

export default App;
