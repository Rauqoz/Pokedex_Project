const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

// const base_local = `http://localhost:4500`;
const base_api = 'https://pokeapi.co/api/v2';

export const get_dex_pokemons_ = async (range) => {
	// var raw = JSON.stringify(range);

	// var requestOptions = {
	// 	method: 'POST',
	// 	headers: myHeaders,
	// 	body: raw,
	// 	redirect: 'follow'
	// };

	// return await fetch(`${base_local}/pokemons`, requestOptions).then((response) => response.json());

	let pokes_pre = [];

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	for (let i = range.rstart; i <= range.rend; i++) {
		const tempo = await fetch(`${base_api}/pokemon/${i}`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
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
		pokes_pre.push(tempo);
	}

	return pokes_pre;
};

export const get_dex_pokemon_ = async (id) => {
	// var raw = JSON.stringify({ id });

	// var requestOptions = {
	// 	method: 'POST',
	// 	headers: myHeaders,
	// 	body: raw,
	// 	redirect: 'follow'
	// };

	// return await fetch(`${base_local}/pokemon`, requestOptions).then((response) => response.json());

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const moves_pre = await fetch(`${base_api}/pokemon/${id}/`, requestOptions)
		.then((response) => response.json())
		.then((data) => {
			return data.moves.map((e) => {
				const { name, url } = e.move;
				return { name, url };
			});
		});

	let move_post = [];

	for (let i = 0; i < moves_pre.length; i++) {
		const tempo = await fetch(`${moves_pre[i].url}`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				const { accuracy, effect_entries, name, power, type } = data;

				return {
					acc: accuracy,
					effect: effect_entries.length !== 0 ? effect_entries[0].effect : 'none',
					name,
					power: power || 'no',
					type: type.name
				};
			});

		move_post.push(tempo);
	}

	return move_post;
};
