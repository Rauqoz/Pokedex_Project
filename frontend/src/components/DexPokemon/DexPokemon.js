import React, { useEffect, useState } from 'react';
import useBackgroundType from '../Hooks/BackgroundTypeHook';
import MovesPokemon from '../MovesPokemon/MovesPokemon';
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
	ContainerTextStatsS,
	ContainerGeneralDexS
} from '../Styles/DexPokemon.styles';

const DexPokemon = ({ pimage, pshiny, pname, php, patk, pdef, psatk, psdef, pspeed, pt1, pt2, phability, pcode,pmoves }) => {
	const { checkType_, type_1, type_2 } = useBackgroundType();
	const [ src_pk, setSrc_pk ] = useState(pimage);

	useEffect(() => {
		checkType_(pt1, pt2);
	});

	return (
		<div>
			<ContainerGeneralDexS>
				<ContainerDexPokemonS>
					<ContainerImageS>
						<ImageT1S style={{ backgroundImage: `url(${type_1})` }} />
						<ImageT2S style={{ backgroundImage: `url(${type_2})` }} />
						<ImagePkS
							src={src_pk}
							onMouseOver={() => setSrc_pk(pshiny)}
							onMouseOut={() => setSrc_pk(pimage)}
						/>
					</ContainerImageS>
					<ContainerNamePokemonS>{`${pname} - ${pcode}`}</ContainerNamePokemonS>
					<ContainerStatsPokemonS>
						<TitleStatsS>{`Type: ${pt1} / ${pt2} || Hability: ${phability}`}</TitleStatsS>
						<ContainerTextStatsS>
							<ContainerTextBaseStatsS>
								<TextBaseStatsS>Base Hp: </TextBaseStatsS>
								<TextBaseStatsS>{php}</TextBaseStatsS>
							</ContainerTextBaseStatsS>
							<ContainerTextBaseStatsS>
								<TextBaseStatsS>Base Attack: </TextBaseStatsS>
								<TextBaseStatsS>{patk}</TextBaseStatsS>
							</ContainerTextBaseStatsS>
							<ContainerTextBaseStatsS>
								<TextBaseStatsS>Base Defense: </TextBaseStatsS>
								<TextBaseStatsS>{pdef}</TextBaseStatsS>
							</ContainerTextBaseStatsS>
							<ContainerTextBaseStatsS>
								<TextBaseStatsS>Base Special-Attack: </TextBaseStatsS>
								<TextBaseStatsS>{psatk}</TextBaseStatsS>
							</ContainerTextBaseStatsS>
							<ContainerTextBaseStatsS>
								<TextBaseStatsS>Base Special-Defense: </TextBaseStatsS>
								<TextBaseStatsS>{psdef}</TextBaseStatsS>
							</ContainerTextBaseStatsS>
							<ContainerTextBaseStatsS>
								<TextBaseStatsS>Base Speed: </TextBaseStatsS>
								<TextBaseStatsS>{pspeed}</TextBaseStatsS>
							</ContainerTextBaseStatsS>
							<ContainerTextBaseStatsS>
								<ButtonSaveS>save</ButtonSaveS>
							</ContainerTextBaseStatsS>
						</ContainerTextStatsS>
					</ContainerStatsPokemonS>
				</ContainerDexPokemonS>
			</ContainerGeneralDexS>
			<ContainerGeneralDexS>
				<ContainerDexPokemonS>
					<MovesPokemon pmoves={pmoves} />
				</ContainerDexPokemonS>
			</ContainerGeneralDexS>
		</div>
	);
};

export default DexPokemon;
