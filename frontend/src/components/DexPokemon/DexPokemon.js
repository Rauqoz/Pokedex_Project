import React, { useState } from 'react';
import { useNavigate } from 'react-router';
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

const DexPokemon = ({
	pimage,
	pshiny,
	pname,
	php,
	patk,
	pdef,
	psatk,
	psdef,
	pspeed,
	pt1,
	pt2,
	pability,
	pcode,
	pmoves,
	type_1,
	type_2
}) => {
	const [ src_pk, setSrc_pk ] = useState(pimage);
	const navigate = useNavigate();

	const save_ = () => {
		let resp;
		if (window.localStorage.getItem('user_pk') === '') {
			alert('First Login n.n');
			navigate('/login');
		} else {
			resp = window.prompt('NickName for your Pokemon');
			if (resp.length !== 0) {
				alert('Adding Pokemon');
			}
		}
	};

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
						<TitleStatsS>{`Type: ${pt1} / ${pt2} || Ability: ${pability}`}</TitleStatsS>
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
								<ButtonSaveS onClick={save_}>save</ButtonSaveS>
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
