const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const base_local = `http://localhost:4500`;

export const get_dex_pokemons_ = async (range) => {
	var raw = JSON.stringify(range);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	return await fetch(`${base_local}/pokemons`, requestOptions).then((response) => response.json());
};

export const get_dex_pokemon_ = async (id) => {
	var raw = JSON.stringify({ id });

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	return await fetch(`${base_local}/pokemon`, requestOptions).then((response) => response.json());
};
