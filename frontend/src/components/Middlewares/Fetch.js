const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const get_dex_pokemons_ = async (range) => {
	var raw = JSON.stringify({
		rstart: 1,
		rend: 10
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	return await fetch('http://localhost:4500/pokemons', requestOptions).then((response) => response.json());
};
