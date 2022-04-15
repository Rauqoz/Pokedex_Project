import React, { useState } from 'react';
import { ContainerProfileS, FormGroupS, FormS, FormTitleS } from '../Styles/LoginAndSignUp.styles';

const PageProfile = () => {
	const [ current_user ] = useState(JSON.parse(window.localStorage.getItem('user_pk')));

	return (
		<ContainerProfileS>
			<FormS>
				<FormTitleS>
					<label>My Profile</label>
				</FormTitleS>
				<FormGroupS>
					<label>Name:</label>
					<input disabled={true} type="text" value={current_user.db_name} />
				</FormGroupS>
				<FormGroupS>
					<label>NickName:</label>
					<input disabled={true} type="text" value={current_user.db_nick} />
				</FormGroupS>
				<FormGroupS>
					<label>Region Origin:</label>
					<input disabled={true} type="text" value={current_user.db_region} />
				</FormGroupS>
				<FormGroupS>
					<label>Gender:</label>
					<input disabled={true} type="text" value={current_user.db_gender} />
				</FormGroupS>
				<FormGroupS>
					<label>Age:</label>
					<input disabled={true} type="number" value={current_user.db_age} />
				</FormGroupS>
				<FormGroupS>
					<label>Email:</label>
					<input disabled={true} type="email" value={current_user.db_email} />
				</FormGroupS>
				<FormGroupS>
					<label>Trainer Class:</label>
					<input disabled={true} type="email" value={current_user.db_trainerclass} />
				</FormGroupS>
			</FormS>
		</ContainerProfileS>
	);
};

export default PageProfile;
