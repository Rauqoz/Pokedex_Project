import './App.css';
import DexPokemon from './components/DexPokemon/DexPokemon';
import NavBar from './components/Home/NavBar';
import { ContainerGeneralDexS } from './components/Styles/DexPokemon.styles';
import { AppContainerS } from './components/Styles/PaletteColor.styles';

function App() {
	return (
		<AppContainerS>
			<NavBar />
			<ContainerGeneralDexS>
				<DexPokemon
					patk={20}
					pdef={20}
					php={20}
					psatk={20}
					psdef={20}
					pspeed={20}
					pimage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png"
					pname="Gastly"
					pt1="ghost"
					pt2="poison"
				/>
			</ContainerGeneralDexS>
			<ContainerGeneralDexS>
				<DexPokemon
					patk={20}
					pdef={20}
					php={20}
					psatk={20}
					psdef={20}
					pspeed={20}
					pimage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
					pname="Snorlax"
					pt1="normal"
					pt2="normal"
				/>
			</ContainerGeneralDexS>
		</AppContainerS>
	);
}

export default App;

/* <CardPokemon
	pt1="ghost"
	pt2="poison"
	pimage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png"
	pname="gastly"
/> */

/* <ContainerGeneralDexS>
	<DexPokemon
		patk={20}
		pdef={20}
		php={20}
		psatk={20}
		psdef={20}
		pspeed={20}
		pimage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
		pname="Snorlax"
		pt1="normal"
		pt2="normal"
	/>
</ContainerGeneralDexS>; */
