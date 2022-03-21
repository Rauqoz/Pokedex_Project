const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4500;
const base_url = '';

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

// app.post('/pokemons', async (req, res) => {
// 	let pokes_pre = [];

// 	for (let i = req.body.rstart; i <= req.body.rend; i++) {
// 		const tempo = await get_general_(`${base_url}/pokemon/${i}`, ({ data }) => {
// 			let types_pre = [];

// 			types_pre = data.types.map(({ type }) => {
// 				return type.name;
// 			});

// 			return {
// 				pimage: data.sprites.front_default,
// 				pshiny: data.sprites.front_shiny,
// 				pname: data.name,
// 				pt1: types_pre[0],
// 				pt2: types_pre[1] ? types_pre[1] : types_pre[0],
// 				pcode: data.id,
// 				pability: data.abilities[0].ability.name,
// 				patk: data.stats[1].base_stat,
// 				pdef: data.stats[2].base_stat,
// 				php: data.stats[0].base_stat,
// 				psatk: data.stats[3].base_stat,
// 				psdef: data.stats[4].base_stat,
// 				pspeed: data.stats[5].base_stat
// 			};
// 		});
// 		pokes_pre.push(tempo);
// 	}

// 	res.send(pokes_pre);
// });

// app.post('/pokemon', async (req, res) => {
// 	const moves_pre = await get_general_(`${base_url}/pokemon/${req.body.id}`, ({ data }) => {
// 		return data.moves.map((e) => {
// 			const { name, url } = e.move;
// 			return { name, url };
// 		});
// 	});

// 	let move_post = [];

// 	for (let i = 0; i < moves_pre.length; i++) {
// 		const tempo = await get_general_(`${moves_pre[i].url}`, (data) => {
// 			const { accuracy, effect_entries, name, power, type } = data.data;

// 			return {
// 				acc: accuracy,
// 				effect: effect_entries.length !== 0 ? effect_entries[0].effect : 'none',
// 				name,
// 				power: power || 'no',
// 				type: type.name
// 			};
// 		});

// 		move_post.push(tempo);
// 	}

// 	res.send(move_post);
// });

const server = app.listen(port, () => {
	console.log(`server on port ${port}`);
});
