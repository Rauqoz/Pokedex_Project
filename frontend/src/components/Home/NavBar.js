import React from 'react';
import { ALinkS, LiLeftS, LiRightS, NavBarS } from '../Styles/NavBar.styles';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<NavBarS>
			<LiLeftS>
				<ALinkS onClick={() => navigate('/')}>Rauqoz-Dex</ALinkS>
			</LiLeftS>
			<LiLeftS>
				<ALinkS>Add Pokemons</ALinkS>
			</LiLeftS>
			<LiLeftS>
				<ALinkS>My Pokemons</ALinkS>
			</LiLeftS>
			<LiRightS>
				<ALinkS>Log Out</ALinkS>
			</LiRightS>
		</NavBarS>
	);
};

export default NavBar;
