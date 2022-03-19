import React, { useEffect, useState } from 'react';
import useBackgroundType from '../Hooks/BackgroundTypeHook';
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

const CardPokemon = ({ pt1, pt2, pimage, pshiny, pname, pcode }) => {
	const { checkType_, type_1, type_2 } = useBackgroundType();
	const [ src_pk, setSrc_pk ] = useState('');

	useEffect(() => {
		checkType_(pt1, pt2);
		setSrc_pk(pimage);
	}, []);

	return (
		<ContainerCardS
			onClick={() => console.log(pcode)}
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
