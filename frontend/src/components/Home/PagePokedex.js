import React, { Fragment, useEffect, useState } from 'react';
import CardPokemon from '../CardPokemon/CardPokemon';
import { get_dex_pokemons_ } from '../Middlewares/Fetch';
import { ContainerWrapS } from '../Styles/CardPokemon.styles';
import { ButtonS, ContainerButtonS } from '../Styles/PageGeneral.styles';
import useBackgroundType from '../Hooks/BackgroundTypeHook';
import Loading from '../Loading/Loading';

const PagePokedex = () => {
	const poke_ranges = [
		{
			rstart: 1,
			rend: 100
		},
		{
			rstart: 101,
			rend: 200
		},
		{
			rstart: 201,
			rend: 300
		},
		{
			rstart: 301,
			rend: 400
		},
		{
			rstart: 401,
			rend: 500
		},
		{
			rstart: 501,
			rend: 600
		},
		{
			rstart: 601,
			rend: 700
		},
		{
			rstart: 701,
			rend: 800
		},
		{
			rstart: 801,
			rend: 898
		}
	];

	const [ poke_count, setPoke_count ] = useState(0);
	const [ poke_list, setPoke_list ] = useState([]);
	const { checkType_ } = useBackgroundType();
	const controller = new AbortController();

	const next_page_ = () => {
		setPoke_list([]);
		if (poke_count >= 8) {
			setPoke_count(0);
		} else {
			setPoke_count((pre) => pre + 1);
		}
	};

	const previos_page_ = () => {
		setPoke_list([]);
		if (poke_count <= 0) {
			setPoke_count(8);
		} else {
			setPoke_count((pre) => pre - 1);
		}
	};

	useEffect(
		() => {
			get_dex_pokemons_(poke_ranges[poke_count]).then((data) => setPoke_list(data));

			return () => {
				controller.abort();
			};
		},
		[ poke_count ]
	);

	return (
		<Fragment>
			<ContainerButtonS>
				<ButtonS disabled={poke_list.length === 0 ? true : false} onClick={previos_page_}>
					Previos
				</ButtonS>
				<ButtonS disabled={poke_list.length === 0 ? true : false} onClick={next_page_}>
					Next
				</ButtonS>
			</ContainerButtonS>
			<ContainerWrapS>
				{poke_list.length === 0 ? (
					<Loading />
				) : (
					poke_list.map((e) => {
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
					})
				)}
			</ContainerWrapS>
		</Fragment>
	);
};

export default PagePokedex;
