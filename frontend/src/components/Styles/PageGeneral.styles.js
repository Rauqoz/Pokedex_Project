import styled from 'styled-components';
import { Palette_Four, Palette_One } from './PaletteColor.styles';

export const ContainerS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ImageS = styled.img`
	width: 60vw;
	height: auto;
`;

export const ContainerButtonS = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;
`;

export const ButtonS = styled.button`
	margin-inline: 10vw;
	margin-bottom: 30px;
	font-size: 30px;
	color: ${Palette_Four};
	background-color: ${Palette_One};
	border-style: solid;
	border-color: ${Palette_One};

	:hover& {
		transition: 0.4s;
		color: ${Palette_One};
		background-color: ${Palette_Four};
		border-color: ${Palette_One};
	}
`;

export const ContainerAddPkS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
