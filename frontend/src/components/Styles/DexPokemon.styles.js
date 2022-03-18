import styled from 'styled-components';
import { Palette_Background, Palette_Four, Palette_One } from './PaletteColor.styles';

export const ContainerGeneralDexS = styled.div`
	display: flex;
	justify-content: center;
`;

export const ContainerDexPokemonS = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.7;
	height: 500px;
	margin: 10px;
`;

export const ContainerNamePokemonS = styled.div`
	display: flex;
	flex: 0.1;
	justify-content: center;
	${Palette_Background};
	color: ${Palette_Four};
	align-items: center;
	font-size: 200%;
`;

export const ContainerStatsPokemonS = styled.div`
	flex: 0.4;
	display: flex;
	flex-direction: column;
`;

export const TitleStatsS = styled.div`
	flex: 0.1;
	justify-content: center;
	align-items: center;
	display: flex;
	font-size: 150%;
	${Palette_Background};
	color: ${Palette_Four};
`;

export const ContainerTextStatsS = styled.div`
	flex: 0.9;
	display: flex;
	flex-direction: column;
	align-items: center;
	${Palette_Background};
	color: ${Palette_Four};
`;

export const ContainerImageS = styled.div`
	flex: 0.5;
	display: flex;
	flex-flow: row;
	justify-content: center;
`;

export const ImageT1S = styled.div`
	border-radius: 20px 0 0 0;
	flex: 1;
`;

export const ImageT2S = styled.div`
	border-radius: 0 20px 0 0;
	flex: 1;
`;

export const ImagePkS = styled.img`
	position: absolute;
	width: auto;
	height: 350px;
	margin-top: -40px;
`;

export const ContainerTextBaseStatsS = styled.div`
	color: ${Palette_Four};
	display: flex;
	margin: auto;
`;

export const TextBaseStatsS = styled.p`
	display: flex;
	justify-content: center;
	margin: auto;
	min-width: 20vw;
`;

export const ButtonSaveS = styled.button`
	width: 69.8vw;
	height: 4vh;
	border-style: none;
	border-color: ${Palette_One};
	color: ${Palette_Four};
	background-color: ${Palette_One};

	:hover& {
		transition: 0.4s;
		color: ${Palette_One};
		background-color: ${Palette_Four};
	}
`;
