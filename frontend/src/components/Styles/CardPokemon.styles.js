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
	padding: 8px;

	:hover& {
		transition: 2s;
	}
`;

export const ContainerImageS = styled.div`
	display: flex;
	justify-content: center;

	${ContainerCardS}:hover & {
		height: 120px;
		width: 250px;
	}
`;

export const ImageT1S = styled.img`
	width: 200px;
	height: 110px;
	clip-path: inset(0 50% 0 0);
	position: absolute;
	border-radius: 20px 0 20px 0;

	${ContainerCardS}:hover & {
		height: 120px;
		width: 250px;
	}
`;

export const ImageT2S = styled.img`
	width: 200px;
	height: 110px;
	clip-path: inset(0 0 0 50%);
	border-radius: 0 20px 0 20px;

	${ContainerCardS}:hover & {
		height: 120px;
		width: 250px;
	}
`;

export const ImagePkS = styled.img`
	width: 110px;
	height: 110px;
	position: absolute;

	${ContainerCardS}:hover & {
		height: 200px;
		width: 200px;
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

	${ContainerCardS}:hover & {
		height: 120px;
		width: 250px;
	}
`;

export const TitleS = styled.h2`margin-top: 5px;`;
export const DescriptionS = styled.p`margin-top: -15px;`;
