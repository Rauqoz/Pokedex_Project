import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export const PageRoam = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};
