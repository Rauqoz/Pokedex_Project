import React from 'react';
import { ButtonS, ContainerS } from '../Styles/PageGeneral.styles';

const About = () => {
	const open_ = () => {
		window.open('https://github.com/Rauqoz');
		window.open('https://github.com/Rauqoz/Pokedex_Project');
	};

	return (
		<ContainerS>
			<h1>RauqozDex</h1>
			<p>Developed with Free PokeAPI</p>
			<ButtonS onClick={open_}>Github - About Project</ButtonS>
		</ContainerS>
	);
};

export default About;
