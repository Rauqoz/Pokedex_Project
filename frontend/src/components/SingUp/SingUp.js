import React from 'react';
import useFormHook from '../Hooks/FormHook';
import { ContainerS, FormButtonS, FormGroupS, FormS, FormTitleS } from '../Styles/LoginAndSingUp.styles';

const SingUp = () => {
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

	const submit_ = (e) => {
		e.preventDefault();
		if (validateSingUp_()) {
			console.log(form_data);
		} else {
			console.log('%cForm Incompleto', 'color:violet');
		}
		clean_();
	};

	return (
		<ContainerS>
			<FormS>
				<FormTitleS>
					<label>Sing Up</label>
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
					<label>Region:</label>
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
						<option value="masculino">Masculino</option>
						<option value="femenino">Femenino</option>
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
						<option value="class">Class</option>
					</select>
				</FormGroupS>
				<FormTitleS>
					<FormButtonS onClick={submit_}>I have Account !</FormButtonS>
					<FormButtonS onClick={submit_}>Sing Up</FormButtonS>
					<FormButtonS onClick={submit_}>Home</FormButtonS>
				</FormTitleS>
			</FormS>
		</ContainerS>
	);
};

export default SingUp;
