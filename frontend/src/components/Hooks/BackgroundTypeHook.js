import { useState } from 'react';

const useBackgroundType = () => {
	const [ type_1, setType_1 ] = useState('');
	const [ type_2, setType_2 ] = useState('');

	const checkType_ = (t1, t2) => {
		checkType_Generic_(t1, setType_1);
		checkType_Generic_(t2, setType_2);
	};

	const checkType_Generic_ = (tp, st) => {
		switch (tp) {
			case 'normal':
				st(require('../../Assets/type_normal.png'));
				break;
			case 'fighting':
				st(require('../../Assets/type_fighting.png'));
				break;
			case 'flying':
				st(require('../../Assets/type_flying.png'));
				break;
			case 'poison':
				st(require('../../Assets/type_poison.png'));
				break;
			case 'ground':
				st(require('../../Assets/type_ground.png'));
				break;
			case 'rock':
				st(require('../../Assets/type_rock.png'));
				break;
			case 'bug':
				st(require('../../Assets/type_bug.png'));
				break;
			case 'ghost':
				st(require('../../Assets/type_ghost.png'));
				break;
			case 'steel':
				st(require('../../Assets/type_steel.png'));
				break;
			case 'fire':
				st(require('../../Assets/type_fire.png'));
				break;
			case 'water':
				st(require('../../Assets/type_water.png'));
				break;
			case 'grass':
				st(require('../../Assets/type_grass.png'));
				break;
			case 'electric':
				st(require('../../Assets/type_electric.png'));
				break;
			case 'psychic':
				st(require('../../Assets/type_psychic.png'));
				break;
			case 'ice':
				st(require('../../Assets/type_ice.png'));
				break;
			case 'dragon':
				st(require('../../Assets/type_dragon.png'));
				break;
			case 'dark':
				st(require('../../Assets/type_dark.png'));
				break;
			case 'fairy':
				st(require('../../Assets/type_fairy.png'));
				break;

			default:
				st(require('../../Assets/type_normal.png'));
				break;
		}
	};

	return {
		type_1,
		type_2,
		checkType_
	};
};

export default useBackgroundType;
