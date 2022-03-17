import React, { useEffect } from 'react';
import useBackgroundType from '../Hooks/BackgroundTypeHook';
import {
	ContentS,
	ContentTextS,
	ContetImageS,
	DescriptionS,
	ImagePkS,
	ImageT1S,
	ImageT2S,
	TitleS
} from '../Styles/CardPokemon.styles';

const CardPokemon = ({ t1, t2 }) => {
	const { checkType_, type_1, type_2 } = useBackgroundType();

	useEffect(() => {
		checkType_(t1, t2);
	}, []);

	return (
		<ContentS>
			<ContetImageS>
				<ImageT1S src={type_1} />
				<ImageT2S src={type_2} />
				<ImagePkS src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" />
			</ContetImageS>
			<ContentTextS>
				<TitleS>feraligatr</TitleS>
				<DescriptionS>feraligatr - feraligatr</DescriptionS>
			</ContentTextS>
		</ContentS>
	);
};

export default CardPokemon;
