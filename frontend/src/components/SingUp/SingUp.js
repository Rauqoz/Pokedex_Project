import React, { useState } from 'react';
import { ContainerS, FormButtonS, FormGroupS, FormS, FormTitleS } from './styles/SingUp.style';

const SingUp = () => {
	const [ name, setName ] = useState('');
	const [ nick, setNick ] = useState('');
	const [ region, setRegion ] = useState('region'); //selected
	const [ gender, setGender ] = useState('masculino'); //selected
	const [ age, setAge ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ trainerclass, setTrainerclass ] = useState('class'); //selected

	const submit_ = (e) => {
		e.preventDefault();
	};

	return (
		<ContainerS>
			<FormS>
				<FormTitleS>
					<label>Sing Up </label>
				</FormTitleS>
				<FormGroupS>
					<label>Name: </label>
					<input placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
				</FormGroupS>
				<FormGroupS>
					<label>NickName: </label>
					<input placeholder="NickName" onChange={(e) => setNick(e.target.value)} value={nick} />
				</FormGroupS>
				<FormGroupS>
					<label>Region: </label>
					<select onChange={(e) => setRegion(e.target.value)} value={region}>
						<option value="region">Region</option>
					</select>
				</FormGroupS>
				<FormGroupS>
					<label>Gender: </label>
					<select onChange={(e) => setGender(e.target.value)} value={gender}>
						<option value="masculino">Masculino</option>
						<option value="femenino">Femenino</option>
					</select>
				</FormGroupS>
				<FormGroupS>
					<label>Age: </label>
					<input placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} />
				</FormGroupS>
				<FormGroupS>
					<label>Email: </label>
					<input
						placeholder="Email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</FormGroupS>
				<FormGroupS>
					<label>Trainer Class: </label>
					<select onChange={(e) => setTrainerclass(e.target.value)} value={trainerclass}>
						<option value="class">Class</option>
					</select>
				</FormGroupS>
				<FormTitleS>
					<FormButtonS onClick={submit_}>Sing Up</FormButtonS>
				</FormTitleS>
			</FormS>
		</ContainerS>
	);
};

export default SingUp;
