import React from 'react';
import useFormHook from '../Hooks/FormHook';
import { ContainerS, FormButtonS, FormGroupS, FormS, FormTitleS } from '../Styles/LoginAndSignUp.styles';

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
						<option value="beauty">Beauty</option>
						<option value="biker">Biker</option>
						<option value="bird keeper">Bird Keeper</option>
						<option value="blackbelt">Blackbelt</option>
						<option value="bug catcher">Bug Catcher</option>
						<option value="burglar">Burglar</option>
						<option value="channeler">Channeler</option>
						<option value="cooltrainer">Cooltrainer</option>
						<option value="cue ball">Cue Ball</option>
						<option value="engineer">Engineer</option>
						<option value="fisherman">Fisherman</option>
						<option value="gambler">Gambler</option>
						<option value="gentleman">Gentleman</option>
						<option value="hiker">Hiker</option>
						<option value="jr. trainer">Jr. Trainer</option>
						<option value="juggler">Juggler</option>
						<option value="lass">Lass</option>
						<option value="pokemaniac">PokeManiac</option>
						<option value="psychic">Psychic</option>
						<option value="rival">Rival</option>
						<option value="rocker">Rocker</option>
						<option value="rocket">Rocket</option>
						<option value="sailor">Sailor</option>
						<option value="scientist">Scientist</option>
						<option value="super nerd">Super Nerd</option>
						<option value="swimmer">Swimmer</option>
						<option value="tamer">Tamer</option>
						<option value="youngste">Youngster</option>
					</select>
				</FormGroupS>
				<FormTitleS>
					<FormButtonS onClick={submit_}>I have Account !</FormButtonS>
					<FormButtonS onClick={submit_}>Sign Up</FormButtonS>
					<FormButtonS onClick={submit_}>Home</FormButtonS>
				</FormTitleS>
			</FormS>
		</ContainerS>
	);
};

export default SingUp;
