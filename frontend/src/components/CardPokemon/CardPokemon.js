import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	ContainerCardS,
	ContainerTextS,
	ContainerImageS,
	DescriptionS,
	ImagePkS,
	ImageT1S,
	ImageT2S,
	TitleS
} from '../Styles/CardPokemon.styles';

const CardPokemon = ({
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
}) => {
	const navigate = useNavigate();
	const [ src_pk, setSrc_pk ] = useState(pimage);

	return (
		<ContainerCardS
			onClick={() => {
				window.localStorage.setItem('pcode', pcode);
				navigate('/poke', {
					state: {
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
					}
				});
			}}
			onMouseOver={() => setSrc_pk(pshiny)}
			onMouseOut={() => setSrc_pk(pimage)}
		>
			<ContainerImageS>
				<ImageT1S src={type_1} />
				<ImageT2S src={type_2} />
				<ImagePkS src={src_pk} />
			</ContainerImageS>
			<ContainerTextS>
				<TitleS>{pname}</TitleS>
				<DescriptionS>
					{' '}
					{pt1} - {pt2}
				</DescriptionS>
			</ContainerTextS>
		</ContainerCardS>
	);
};

export default CardPokemon;
