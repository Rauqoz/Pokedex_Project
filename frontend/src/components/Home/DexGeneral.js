import React, { Fragment, useEffect, useState } from 'react';
import CardPokemon from '../CardPokemon/CardPokemon';
import { get_dex_pokemons_ } from '../Middlewares/Fetch';
import { ContainerWrapS } from '../Styles/CardPokemon.styles';
import DexGeneralPk from './DexGeneralPk';

const DexGeneral = () => {
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

	const next_page_ = () => {
		console.log(poke_count);
		console.log(poke_list);
		if (poke_count >= 8) {
			setPoke_count(0);
		} else {
			setPoke_count((pre) => pre + 1);
		}
	};

	const previos_page_ = () => {
		if (poke_count <= 0) {
			setPoke_count(8);
		} else {
			setPoke_count((pre) => pre - 1);
		}
	};

	useEffect(() => {
		get_dex_pokemons_(poke_ranges[poke_count]).then((data) => setPoke_list((pre) => [ ...pre, data ]));
	}, []);

	return (
		<Fragment>
			<button onClick={previos_page_}>Previos</button>
			<button onClick={next_page_}>Next</button>
			<ContainerWrapS>
				{/* <DexGeneralPk poke_count={poke_count} poke_list={poke_list} /> */}
			</ContainerWrapS>
		</Fragment>
	);
};

export default DexGeneral;
