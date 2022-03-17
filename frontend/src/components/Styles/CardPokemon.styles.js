import styled from 'styled-components';
import { Palette_Background, Palette_Four } from './PaletteColor.styles';

export const ContentWrapS = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const ContentS = styled.div`
	width: auto;
	height: auto;
	padding: 8px;

	:hover& {
		transition: 2s;
	}
`;

export const ContetImageS = styled.div`
	display: flex;
	justify-content: center;

	${ContentS}:hover & {
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

	${ContentS}:hover & {
		height: 120px;
		width: 250px;
	}
`;

export const ImageT2S = styled.img`
	width: 200px;
	height: 110px;
	clip-path: inset(0 0 0 50%);
	border-radius: 0 20px 0 20px;

	${ContentS}:hover & {
		height: 120px;
		width: 250px;
	}
`;

export const ImagePkS = styled.img`
	width: 110px;
	height: 110px;
	position: absolute;

	${ContentS}:hover & {
		height: 200px;
		width: 200px;
	}
`;

export const ContentTextS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${Palette_Background};
	border-radius: 0 0 20px 20px;
	color: ${Palette_Four};

	${ContentS}:hover & {
		height: 120px;
		width: 250px;
	}
`;

export const TitleS = styled.h2`margin-top: 5px;`;
export const DescriptionS = styled.p`margin-top: -15px;`;
