import { useState } from 'react';

const useFormHook = () => {
	const _initial_data = {
		name_f: '',
		nick_f: '',
		pass_f: '',
		region_f: 'kanto',
		gender_f: 'masculino',
		age_f: '',
		email_f: '',
		trainerclass_f: 'beauty'
	};

	const [ form_data, setForm_data_ ] = useState({ ..._initial_data });

	const clean_ = () => {
		setForm_data_({ ..._initial_data });
	};

	const setName_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, name_f: e.target.value };
		});
	};

	const setNick_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, nick_f: e.target.value };
		});
	};

	const setPass_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, pass_f: e.target.value };
		});
	};

	const setRegion_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, region_f: e.target.value };
		});
	};

	const setGender_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, gender_f: e.target.value };
		});
	};

	const setAge_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, age_f: e.target.value };
		});
	};

	const setEmail_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, email_f: e.target.value };
		});
	};

	const setTrainerClass_ = (e) => {
		setForm_data_((pre) => {
			return { ...pre, trainerclass_f: e.target.value };
		});
	};

	const validateSingUp_ = () => {
		const { name_f, nick_f, pass_f, age_f, email_f } = form_data;

		if (name_f == '') return false;
		if (nick_f == '') return false;
		if (pass_f == '') return false;
		if (age_f == '') return false;
		if (email_f == '') return false;

		return true;
	};

	const validateLogin_ = () => {
		const { nick_f, pass_f } = form_data;

		if (nick_f == '') return false;
		if (pass_f == '') return false;

		return true;
	};

	return {
		form_data,
		clean_,
		setName_,
		setNick_,
		setPass_,
		setRegion_,
		setGender_,
		setAge_,
		setEmail_,
		setTrainerClass_,
		validateSingUp_,
		validateLogin_
	};
};

export default useFormHook;
