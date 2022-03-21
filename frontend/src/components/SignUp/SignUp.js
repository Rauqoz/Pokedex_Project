import React from 'react';
import { useNavigate } from 'react-router';
import useFormHook from '../Hooks/FormHook';
import { post_sign_up_ } from '../Middlewares/Fetch';
import { ContainerS, FormButtonS, FormGroupS, FormS, FormTitleS } from '../Styles/LoginAndSignUp.styles';

const SingUp = () => {
	const navigate = useNavigate();
	const {
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
		validateSingUp_
	} = useFormHook();

	const submit_ = async (e, action) => {
		e.preventDefault();

		switch (action) {
			case 'login':
				navigate('/login');
				break;
			case 'sign':
				if (validateSingUp_()) {
					const sign_up = await post_sign_up_(form_data).then((data) => {
						if (!data.flag) {
							alert('User Exists,Try with Other');
						} else {
							alert('Sign Up Complete');
						}
						return data.flag;
					});

					if (sign_up) navigate('/login');
				} else {
					alert('Incomplete Form');
					console.log('%cForm Incompleto', 'color:violet');
				}
				clean_();

				break;
			case 'home':
				navigate('/');
				break;

			default:
				break;
		}
	};

	return (
		<ContainerS>
			<FormS>
				<FormTitleS>
					<label>Sign Up</label>
				</FormTitleS>
				<FormGroupS>
					<label>Name:</label>
					<input placeholder="Name" type="text" value={form_data.name_f} onChange={setName_} />
				</FormGroupS>
				<FormGroupS>
					<label>NickName:</label>
					<input placeholder="NickName" type="text" value={form_data.nick_f} onChange={setNick_} />
				</FormGroupS>
				<FormGroupS>
					<label>Password:</label>
					<input placeholder="Password" type="password" value={form_data.pass_f} onChange={setPass_} />
				</FormGroupS>
				<FormGroupS>
					<label>Region Origin:</label>
					<select value={form_data.region_f} onChange={setRegion_}>
						<option value="kanto">Kanto</option>
						<option value="johto">Johto</option>
						<option value="hoenn">Hoenn</option>
						<option value="sinnoh">Sinnoh</option>
						<option value="unova">Unova</option>
						<option value="kalos">Kalos</option>
						<option value="alola">Alola</option>
						<option value="galar">Galar</option>
					</select>
				</FormGroupS>
				<FormGroupS>
					<label>Gender:</label>
					<select value={form_data.gender_f} onChange={setGender_}>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</FormGroupS>
				<FormGroupS>
					<label>Age:</label>
					<input placeholder="Age" type="number" value={form_data.age_f} onChange={setAge_} />
				</FormGroupS>
				<FormGroupS>
					<label>Email:</label>
					<input placeholder="Email" type="email" value={form_data.email_f} onChange={setEmail_} />
				</FormGroupS>
				<FormGroupS>
					<label>Trainer Class:</label>
					<select value={form_data.trainerclass_f} onChange={setTrainerClass_}>
						<option value="battle">Battle</option>
						<option value="show">Show</option>
					</select>
				</FormGroupS>
				<FormTitleS>
					<FormButtonS onClick={(e) => submit_(e, 'login')}>I have Account !</FormButtonS>
					<FormButtonS onClick={(e) => submit_(e, 'sign')}>Sign Up</FormButtonS>
					<FormButtonS onClick={(e) => submit_(e, 'home')}>Home</FormButtonS>
				</FormTitleS>
			</FormS>
		</ContainerS>
	);
};

export default SingUp;
