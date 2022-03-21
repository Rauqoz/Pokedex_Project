const useBackgroundType = () => {
	const checkType_ = (t1, t2) => {
		let t1_p = checkType_Generic_(t1);
		let t2_p = checkType_Generic_(t2);
		return [ t1_p, t2_p ];
	};

	const checkType_Generic_ = (tp) => {
		switch (tp) {
			case 'normal':
				return require('../../Assets/type_normal.png');
			case 'fighting':
				return require('../../Assets/type_fighting.png');
			case 'flying':
				return require('../../Assets/type_flying.png');
			case 'poison':
				return require('../../Assets/type_poison.png');
			case 'ground':
				return require('../../Assets/type_ground.png');
			case 'rock':
				return require('../../Assets/type_rock.png');
			case 'bug':
				return require('../../Assets/type_bug.png');
			case 'ghost':
				return require('../../Assets/type_ghost.png');
			case 'steel':
				return require('../../Assets/type_steel.png');
			case 'fire':
				return require('../../Assets/type_fire.png');
			case 'water':
				return require('../../Assets/type_water.png');
			case 'grass':
				return require('../../Assets/type_grass.png');
			case 'electric':
				return require('../../Assets/type_electric.png');
			case 'psychic':
				return require('../../Assets/type_psychic.png');
			case 'ice':
				return require('../../Assets/type_ice.png');
			case 'dragon':
				return require('../../Assets/type_dragon.png');
			case 'dark':
				return require('../../Assets/type_dark.png');
			case 'fairy':
				return require('../../Assets/type_fairy.png');

			default:
				return require('../../Assets/type_normal.png');
		}
	};

	return {
		checkType_
	};
};

export default useBackgroundType;
