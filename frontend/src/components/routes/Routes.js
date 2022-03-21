import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContainerS } from '../Styles/PaletteColor.styles';
import PagePokedex from '../Home/PagePokedex';
import PagePokemon from '../Home/PagePokemon';
import { PageRoam } from '../Home/PageRoam';
import Login from '../Login/Login';
import SingUp from '../SignUp/SignUp';
import PageMyPokes from '../Home/PageMyPokes';

const RoutesMain = () => {
	return (
		<AppContainerS>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PageRoam />}>
						<Route path="/" element={<PagePokedex />} />
						<Route path="poke" element={<PagePokemon />} />
						<Route path="mypokes" element={<PageMyPokes />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SingUp />} />
				</Routes>
			</BrowserRouter>
		</AppContainerS>
	);
};

export default RoutesMain;
