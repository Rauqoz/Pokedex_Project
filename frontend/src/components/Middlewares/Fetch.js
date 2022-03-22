import axios from 'axios';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const base_local = `http://localhost:4500`;
// const base_local = 'https://pokedex-project-drab.vercel.app';
const base_api = 'https://pokeapi.co/api/v2';

export const get_dex_pokemons_ = async (range) => {
	let poke_pre = [];

	for (let i = range.rstart; i <= range.rend; i++) {
		poke_pre.push(`${base_api}/pokemon/${i}`);
	}

	return await axios.all(poke_pre.map((e) => axios.get(e))).then(
		axios.spread((...resps) => {
			const all_pokes = resps.map(({ data }) => {
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
					pcode: data.id,
					pability: data.abilities[0].ability.name,
					patk: data.stats[1].base_stat,
					pdef: data.stats[2].base_stat,
					php: data.stats[0].base_stat,
					psatk: data.stats[3].base_stat,
					psdef: data.stats[4].base_stat,
					pspeed: data.stats[5].base_stat
				};
			});
			return all_pokes;
		})
	);
};

export const get_dex_pokemon_ = async (id) => {
	const moves_pre = await axios.get(`${base_api}/pokemon/${id}/`).then(({ data }) => {
		return data.moves.map((e) => {
			const { url } = e.move;
			return url;
		});
	});

	return await axios.all(moves_pre.map((e) => axios.get(e))).then(
		axios.spread((...resps) => {
			const all_pokes = resps.map(({ data }) => {
				const { accuracy, effect_entries, name, power, type } = data;

				return {
					acc: accuracy,
					effect: effect_entries.length !== 0 ? effect_entries[0].effect : 'none',
					name,
					power: power || 'no',
					type: type.name
				};
			});
			return all_pokes;
		})
	);
};

export const post_sign_up_ = async (form_data) => {
	var data = JSON.stringify(form_data);

	var config = {
		method: 'post',
		url: `${base_local}/signup`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};

	return await axios(config);
};

export const post_login_ = async (form_data) => {
	var data = JSON.stringify(form_data);

	var config = {
		method: 'post',
		url: `${base_local}/login`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};

	return await axios(config).then(({ data }) => data);
};

export const post_user_pokemon_ = async (id, idpk, motepk) => {
	var data = JSON.stringify({
		_id: id,
		id_pk: idpk,
		mote_pk: motepk
	});

	var config = {
		method: 'post',
		url: `${base_local}/addpk`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};

	return await axios(config).then(({ data }) => data);
};

export const get_user_pokemons_ = async (id) => {
	var data = JSON.stringify({
		_id: id
	});

	var config = {
		method: 'post',
		url: `${base_local}/userpk`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};

	const { pokemons } = await axios(config).then(({ data }) => data);

	return await axios.all(pokemons.map((e) => axios.get(`${base_api}/pokemon/${e.pk}`))).then(
		axios.spread((...resps) => {
			const all_pokes = resps.map(({ data }, i) => {
				let types_pre = [];

				types_pre = data.types.map(({ type }) => {
					return type.name;
				});
				return {
					pimage: data.sprites.front_default,
					pshiny: data.sprites.front_shiny,
					pname: pokemons[i].nick,
					pt1: types_pre[0],
					pt2: types_pre[1] ? types_pre[1] : types_pre[0],
					pcode: data.id,
					pability: data.abilities[0].ability.name,
					patk: data.stats[1].base_stat,
					pdef: data.stats[2].base_stat,
					php: data.stats[0].base_stat,
					psatk: data.stats[3].base_stat,
					psdef: data.stats[4].base_stat,
					pspeed: data.stats[5].base_stat
				};
			});
			return [ { pk: 0 }, ...all_pokes ];
		})
	);
};
