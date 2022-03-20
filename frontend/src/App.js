import './App.css';
import CardPokemon from './components/CardPokemon/CardPokemon';
import DexPokemon from './components/DexPokemon/DexPokemon';
import DexGeneral from './components/Home/DexGeneral';
import NavBar from './components/Home/NavBar';
import Login from './components/Login/Login';
import SingUp from './components/SignUp/SignUp';
import { ContainerWrapS } from './components/Styles/CardPokemon.styles';
import { AppContainerS } from './components/Styles/PaletteColor.styles';

function App() {
	const gastly_moves = [
		{
			acc: 100,
			description: 'A fiery punch. May cause a burn.',
			effect: 'Inflicts regular damage. Has a $effect_chance% chance to burn the target.',
			name: 'fire-punch',
			power: 75,
			type: 'fire'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		},
		{
			acc: 100,
			description: 'Pounds with fore­ legs or tail.',
			effect: 'Inflicts regular damage.',
			name: 'pound',
			power: 40,
			type: 'normal'
		}
	];

	return (
		<AppContainerS>
			<NavBar />
			<DexGeneral />
			<DexPokemon
				patk={20}
				pdef={20}
				php={20}
				psatk={20}
				psdef={20}
				pspeed={20}
				pimage={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png'}
				pshiny={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png'}
				pmoves={gastly_moves}
				pname={'Gastly'}
				pt1={'ghost'}
				pt2={'poison'}
				phability={'levitate'}
				pcode={92}
			/>
		</AppContainerS>
	);
}

export default App;
