import React, { useEffect, useState } from 'react';
import DexPokemon from '../DexPokemon/DexPokemon';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonS, ContainerButtonS } from '../Styles/PageGeneral.styles';
import { get_dex_pokemon_ } from '../Middlewares/Fetch';
import Loading from '../Loading/Loading';

const PagePokemon = () => {
	const [ moves_pk, setMoves_pk ] = useState([]);
	const controller = new AbortController();
	const navigate = useNavigate();
	const { state } = useLocation();
	const {
		pt1,
		pt2,
		pimage,
		pshiny,
		pname,
		pcode,
		type_1,
		type_2,
		pability,
		patk,
		pdef,
		php,
		psatk,
		psdef,
		pspeed
	} = state;

	useEffect(
		() => {
			get_dex_pokemon_(pcode).then((data) => setMoves_pk(data));

			return () => {
				controller.abort();
			};
		},
		[ state, pcode ]
	);

	return (
		<div>
			<ContainerButtonS>
				<ButtonS disabled={moves_pk.length === 0 ? true : false} onClick={() => navigate('/')}>
					Previous
				</ButtonS>
			</ContainerButtonS>
			{moves_pk.length === 0 ? (
				<Loading />
			) : (
				<DexPokemon
					patk={patk}
					pdef={pdef}
					php={php}
					psatk={psatk}
					psdef={psdef}
					pspeed={pspeed}
					pimage={pimage}
					pshiny={pshiny}
					pmoves={moves_pk}
					pname={pname}
					type_1={type_1}
					type_2={type_2}
					pt1={pt1}
					pt2={pt2}
					pability={pability}
					pcode={pcode}
				/>
			)}
		</div>
	);
};

export default PagePokemon;
