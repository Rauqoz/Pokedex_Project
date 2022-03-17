import styled from 'styled-components';

export const Palette_One = '#1E3163';
export const Palette_Two = '#2D46B9';
export const Palette_Three = '#45056e';
export const Palette_Four = '#F8F8F8';
export const Palette_Background = `background: ${Palette_One};
background: linear-gradient(135deg, ${Palette_One} 0%, ${Palette_Three} 70%);`;

export const AppContainerS = styled.div`
	background-color: ${Palette_Four};
	min-height: 100vh;
`;
