import styled from 'styled-components';

export const ContentS = styled.div`
	width: auto;
	height: auto;
	padding: 8px;
`;

export const ContetImageS = styled.div`
	display: flex;
	justify-content: center;
`;

export const ImageT1S = styled.img`
	width: 200px;
	height: 110px;
	clip-path: inset(0 50% 0 0);
	position: absolute;
	border-radius: 20px 0 20px 0;
`;

export const ImageT2S = styled.img`
	width: 200px;
	height: 110px;
	clip-path: inset(0 0 0 50%);
	border-radius: 0 20px 0 20px;
`;

export const ImagePkS = styled.img`
	width: 100px;
	height: 100px;
	position: absolute;
`;

export const ContentTextS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: gray;
	border-radius: 0 0 20px 20px;
`;

export const TitleS = styled.h2`margin-top: 5px;`;
export const DescriptionS = styled.p`margin-top: -15px;`;
