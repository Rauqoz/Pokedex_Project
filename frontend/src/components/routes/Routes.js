import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContainerS } from '../Styles/PaletteColor.styles';
import PagePokedex from '../Home/PagePokedex';
import PagePokemon from '../Home/PagePokemon';
import { PageRoam } from '../Home/PageRoam';

const RoutesMain = () => {
	return (
		<AppContainerS>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PageRoam />}>
						<Route path="/" element={<PagePokedex />} />
						<Route path="poke" element={<PagePokemon />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContainerS>
	);
};

export default RoutesMain;
