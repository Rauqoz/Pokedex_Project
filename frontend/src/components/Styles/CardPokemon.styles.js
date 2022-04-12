import styled from 'styled-components';
import { Palette_Background, Palette_Four } from './PaletteColor.styles';

export const ContainerWrapS = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const ContainerCardS = styled.div`
	width: auto;
	height: auto;
	padding: 6px;
	cursor: pointer;
	
	:hover& {
		transition: 2s;
	}
`;

export const ContainerImageS = styled.div`
	display: flex;
	justify-content: center;
	margin: 0;

	${ContainerCardS}:hover & {
		width: 250px;
		height: auto;
	}
`;

export const ImageT1S = styled.img`
	width: 200px;
	height: 110px;
	clip-path: inset(0 49% 0 0);
	border-radius: 20px 0 20px 0;
	position: absolute;

	${ContainerCardS}:hover & {
		width: 250px;
		height: auto;
	}
`;

export const ImageT2S = styled.img`
	width: 200px;
	height: 110px;
	clip-path: inset(0 0 0 49%);
	border-radius: 0 20px 0 20px;

	${ContainerCardS}:hover & {
		width: 250px;
		height: auto;
	}
`;

export const ImagePkS = styled.img`
	width: 110px;
	height: auto;
	position: absolute;

	${ContainerCardS}:hover & {
		width: 200px;
		height: auto;
	}
`;

export const ContainerTextS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${Palette_Background};
	border-radius: 0 0 20px 20px;
	color: ${Palette_Four};
	margin: 0;

	${ContainerCardS}:hover & {
		width: 250px;
		height: 120px;
	}
`;

export const TitleS = styled.h2`margin-top: 5px;`;
export const DescriptionS = styled.p`margin-top: -15px;`;
