const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const get_general_ = async (url, func_data) => {
	var config = {
		method: 'get',
		url: url,
		headers: {}
	};

	return axios(config).then(func_data);
};

app.get('/', (req, res) => {
	res.send(true);
});

app.post('/pokemons', async (req, res) => {
	let pokes_pre = [];

	for (let i = req.body.rstart; i <= req.body.rend; i++) {
		const tempo = await get_general_(`https://pokeapi.co/api/v2/pokemon/${i}`, ({ data }) => {
			let types_pre = [];

			types_pre = data.types.map(({ type }) => {
				return type.name;
			});

			return {
				pimage: data.sprites.front_default,
				pshiny: data.sprites.front_shiny,
				pname: data.name,
				pt1: types_pre[0],
				pt2: types_pre[1] ? types_pre[1] : types_pre[0],
				pcode: data.id
			};
		});
		pokes_pre.push(tempo);
	}

	res.send(pokes_pre);
});

const server = app.listen(port, () => {
	console.log(`server on port ${port}`);
});
