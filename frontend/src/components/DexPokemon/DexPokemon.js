import React, { useEffect } from 'react';
import useBackgroundType from '../Hooks/BackgroundTypeHook';
import {
	ContainerImageS,
	ImagePkS,
	ImageT1S,
	ImageT2S,
	ContainerTextBaseStatsS,
	TextBaseStatsS,
	ButtonSaveS,
	ContainerDexPokemonS,
	ContainerNamePokemonS,
	ContainerStatsPokemonS,
	TitleStatsS,
	ContainerTextStatsS
} from '../Styles/DexPokemon.styles';

const DexPokemon = ({ pimage, pname, php, patk, pdef, psatk, psdef, pspeed, pt1, pt2, pcode }) => {
	const { checkType_, type_1, type_2 } = useBackgroundType();

	useEffect(() => {
		checkType_(pt1, pt2);
	});

	return (
		<ContainerDexPokemonS>
			<ContainerImageS>
				<ImageT1S style={{ backgroundImage: `url(${type_1})` }} />
				<ImageT2S style={{ backgroundImage: `url(${type_2})` }} />
				<ImagePkS src={pimage} />
			</ContainerImageS>
			<ContainerNamePokemonS>{pname}</ContainerNamePokemonS>
			<ContainerStatsPokemonS>
				<TitleStatsS>{`${pt1} - Base Stats - ${pt2}`}</TitleStatsS>
				<ContainerTextStatsS>
					<ContainerTextBaseStatsS>
						<TextBaseStatsS>Hp: </TextBaseStatsS>
						<TextBaseStatsS>{php}</TextBaseStatsS>
					</ContainerTextBaseStatsS>
					<ContainerTextBaseStatsS>
						<TextBaseStatsS>Attack: </TextBaseStatsS>
						<TextBaseStatsS>{patk}</TextBaseStatsS>
					</ContainerTextBaseStatsS>
					<ContainerTextBaseStatsS>
						<TextBaseStatsS>Defense: </TextBaseStatsS>
						<TextBaseStatsS>{pdef}</TextBaseStatsS>
					</ContainerTextBaseStatsS>
					<ContainerTextBaseStatsS>
						<TextBaseStatsS>Special-Attack: </TextBaseStatsS>
						<TextBaseStatsS>{psatk}</TextBaseStatsS>
					</ContainerTextBaseStatsS>
					<ContainerTextBaseStatsS>
						<TextBaseStatsS>Special-Defense: </TextBaseStatsS>
						<TextBaseStatsS>{psdef}</TextBaseStatsS>
					</ContainerTextBaseStatsS>
					<ContainerTextBaseStatsS>
						<TextBaseStatsS>Speed: </TextBaseStatsS>
						<TextBaseStatsS>{pspeed}</TextBaseStatsS>
					</ContainerTextBaseStatsS>
					<ContainerTextBaseStatsS>
						<ButtonSaveS>save</ButtonSaveS>
					</ContainerTextBaseStatsS>
				</ContainerTextStatsS>
			</ContainerStatsPokemonS>
		</ContainerDexPokemonS>
	);
};

export default DexPokemon;
