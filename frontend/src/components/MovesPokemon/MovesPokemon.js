import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const MovesPokemon = ({ pmoves }) => {
	const columns = [
		{
			label: 'Name',
			field: 'name',
			attributes: {
				'aria-controls': 'DataTable',
				'aria-label': 'Name'
			}
		},
		{
			label: 'Type',
			field: 'type',
		},
		{
			label: 'Power',
			field: 'power'
		},
		{
			label: 'Acc.',
			field: 'acc'
		},
		{
			label: 'Description',
			field: 'description',
		},
		{
			label: 'Effect',
			field: 'effect',
		}
	];

	return (
		<MDBDataTableV5
			hover
			entriesOptions={[ 5, 10, 50 ]}
			entries={5}
			data={{ columns: columns, rows: pmoves }}
			fullPagination
		/>
	);
};

export default MovesPokemon;
