import React from 'react';
import { ContainerS, ImageS } from '../Styles/PageGeneral.styles';
import gif_ball from '../../Assets/poke_waiting.gif';

const Loading = () => {
	return (
		<ContainerS>
			<h1>Loading...</h1>
			<ImageS src={gif_ball} alt="Loading..." />
		</ContainerS>
	);
};

export default Loading;
