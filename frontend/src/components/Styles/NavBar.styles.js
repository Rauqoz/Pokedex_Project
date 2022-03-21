import styled from 'styled-components';
import { Palette_Background, Palette_Four, Palette_Two } from './PaletteColor.styles';

export const NavBarS = styled.ul`
	margin: auto;
	padding: auto;
	overflow: hidden;
	${Palette_Background};
	list-style-type: none;
	border-style: solid;
	border-color: ${Palette_Four};
	border-width: 0.5px;
	margin-bottom: 30px;
`;

export const LiLeftS = styled.li`float: left;`;
export const LiRightS = styled.li`float: right;`;

export const ALinkS = styled.div`
	cursor: pointer;
	display: block;
	color: ${Palette_Four};
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;

	:hover& {
		background-color: ${Palette_Four};
		color: ${Palette_Two};
	}
`;
