import styled from 'styled-components';
import { Palette_Background, Palette_Four, Palette_One } from './PaletteColor.styles';

export const ContainerS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 100vh;
	font-size: calc(10px + 2vmin);
	${Palette_Background};
`;

export const FormS = styled.form`min-width: calc(40vw);`;

export const FormTitleS = styled.div`
	display: flex;
	justify-content: center;
	color: ${Palette_Four};
	margin-bottom: 60px;
	font-size: calc(20px + 2vmin);
`;

export const FormGroupS = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${Palette_Four};
`;
export const FormButtonS = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(10px + 2vmin);
	margin-top: 40px;
	margin-right: 10px;
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

export const ContainerProfileS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: calc(10px + 2vmin);
	${Palette_Background};
	min-height: 70vh;
`;
