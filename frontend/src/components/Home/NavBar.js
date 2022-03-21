import React, { useEffect, useState } from 'react';
import { ALinkS, LiLeftS, LiRightS, NavBarS } from '../Styles/NavBar.styles';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const navigate = useNavigate();

	const [ current_user, setCurrent_user ] = useState('');

	useEffect(
		() => {
			if (window.localStorage.getItem('user_pk') === '') {
				setCurrent_user('');
			} else {
				setCurrent_user(window.localStorage.getItem('user_pk'));
			}
		},
		[ window.localStorage.getItem('user_pk') ]
	);

	return (
		<NavBarS>
			<LiLeftS>
				<ALinkS onClick={() => navigate('/')}>Rauqoz-Dex</ALinkS>
			</LiLeftS>
			{current_user.length !== 0 ? (
				<div>
					<LiLeftS>
						<ALinkS>Add Pokemons</ALinkS>
					</LiLeftS>
					<LiLeftS>
						<ALinkS>My Pokemons</ALinkS>
					</LiLeftS>
					<LiRightS>
						<ALinkS>{current_user} Log Out</ALinkS>
					</LiRightS>
				</div>
			) : (
				<div>
					<LiRightS>
						<ALinkS onClick={() => navigate('/login')}>Login</ALinkS>
					</LiRightS>
				</div>
			)}
		</NavBarS>
	);
};

export default NavBar;
