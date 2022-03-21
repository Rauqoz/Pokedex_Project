import './App.css';
import RoutesMain from './components/routes/Routes.js';

function App() {
	window.localStorage.setItem('user_pk', '');
	return <RoutesMain />;
}

export default App;
