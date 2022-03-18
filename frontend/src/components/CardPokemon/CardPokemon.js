import React, { useEffect } from 'react';
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

const CardPokemon = ({ pt1, pt2, pimage, pname, pcode }) => {
	const { checkType_, type_1, type_2 } = useBackgroundType();

	useEffect(() => {
		checkType_(pt1, pt2);
	});

	return (
		<ContainerCardS onClick={() => console.log(pt1, pt2)}>
			<ContainerImageS>
				<ImageT1S src={type_1} />
				<ImageT2S src={type_2} />
				<ImagePkS src={pimage} />
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
