import React from 'react';
import { ALinkS, LiLeftS, LiRightS, NavBarS } from '../Styles/NavBar.styles';

const NavBar = () => {
	return (
		<NavBarS>
			<LiLeftS>
				<ALinkS href="#">Home</ALinkS>
			</LiLeftS>
			<LiLeftS>
				<ALinkS href="#">Add Pokemons</ALinkS>
			</LiLeftS>
			<LiLeftS>
				<ALinkS href="#">My Pokemons</ALinkS>
			</LiLeftS>
			<LiRightS>
				<ALinkS href="#">Log Out</ALinkS>
			</LiRightS>
		</NavBarS>
	);
};

export default NavBar;
