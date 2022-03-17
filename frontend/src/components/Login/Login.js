import React from 'react';
import useFormHook from '../Hooks/FormHook';
import { ContainerS, FormButtonS, FormGroupS, FormS, FormTitleS } from '../Styles/LoginAndSignUp.styles';

const Login = () => {
	const { form_data, setNick_, setPass_, validateLogin_, clean_ } = useFormHook();

	const submit_ = (e) => {
		e.preventDefault();
		if (validateLogin_()) {
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
					<label>Login</label>
				</FormTitleS>
				<FormGroupS>
					<label>NickName:</label>
					<input placeholder="NickName" type="text" value={form_data.nick_f} onChange={setNick_} />
				</FormGroupS>
				<FormGroupS>
					<label>Password:</label>
					<input placeholder="Password" type="password" value={form_data.pass_f} onChange={setPass_} />
				</FormGroupS>
				<FormTitleS>
					<FormButtonS onClick={submit_}>I need Account !</FormButtonS>
					<FormButtonS onClick={submit_}>Login</FormButtonS>
					<FormButtonS onClick={submit_}>Home</FormButtonS>
				</FormTitleS>
			</FormS>
		</ContainerS>
	);
};

export default Login;
