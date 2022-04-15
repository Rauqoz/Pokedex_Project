import React, { Fragment, useEffect, useState } from 'react';
import CardPokemon from '../CardPokemon/CardPokemon';
import { get_user_pokemons_ } from '../Middlewares/Fetch';
import { ContainerWrapS } from '../Styles/CardPokemon.styles';
import useBackgroundType from '../Hooks/BackgroundTypeHook';
import Loading from '../Loading/Loading';
import { ButtonS, ContainerAddPkS } from '../Styles/PageGeneral.styles';
import { useNavigate } from 'react-router';

const PageMyPokes = () => {
	const [ poke_list, setPoke_list ] = useState([]);
	const { checkType_ } = useBackgroundType();
	const controller = new AbortController();
	const navigate = useNavigate();

	useEffect(
		() => {
			get_user_pokemons_(JSON.parse(window.localStorage.getItem('user_pk'))._id).then((data) =>
				setPoke_list(data)
			);

			return () => {
				controller.abort();
			};
		},
		[ window.localStorage.getItem('user_pk') ]
	);

	return (
		<Fragment>
			<ContainerWrapS>
				{poke_list.length === 0 ? (
					<Loading />
				) : (
					poke_list.map((e) => {
						if (e.pk !== 0) {
							let types_p = checkType_(e.pt1, e.pt2);
							return (
								<CardPokemon
									key={e.pcode}
									pimage={e.pimage}
									pshiny={e.pshiny}
									pname={e.pname}
									type_1={types_p[0]}
									type_2={types_p[1]}
									pt1={e.pt1}
									pt2={e.pt2}
									pcode={e.pcode}
									pability={e.pability}
									patk={e.patk}
									pdef={e.pdef}
									php={e.php}
									psatk={e.psatk}
									psdef={e.psdef}
									pspeed={e.pspeed}
								/>
							);
						}
					})
				)}
				{poke_list.length === 1 ? (
					<ContainerAddPkS>
						<h2>Please Add your First Pokemon :D</h2>
						<ButtonS onClick={() => navigate('/')}>Here!</ButtonS>
					</ContainerAddPkS>
				) : null}
			</ContainerWrapS>
		</Fragment>
	);
};

export default PageMyPokes;
