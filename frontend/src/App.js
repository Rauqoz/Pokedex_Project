import './App.css';
import CardPokemon from './components/CardPokemon/CardPokemon';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';

function App() {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{/* <Login /> */}
			{/* <SingUp /> */}
			<CardPokemon t1="ghost" t2="poison" />
			<CardPokemon t1="ice" t2="flying" />
			<CardPokemon t1="normal" t2="fighting" />
			<CardPokemon t1="dark" t2="fire" />
			<CardPokemon t1="water" t2="grass" />
			<CardPokemon t1="fairy" t2="dragon" />
			<CardPokemon t1="steel" t2="ground" />
		</div>
	);
}

export default App;
