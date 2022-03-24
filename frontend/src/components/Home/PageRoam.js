import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../About/About';
import NavBar from './NavBar';

export const PageRoam = () => {
	return (
		<div>
			<NavBar />
			<About />
			<Outlet />
		</div>
	);
};
