import React from 'react';
import { useNavigate } from 'react-router';
import useFormHook from '../Hooks/FormHook';
import { ContainerS, FormButtonS, FormGroupS, FormS, FormTitleS } from '../Styles/LoginAndSignUp.styles';

const Login = () => {
	const { form_data, setNick_, setPass_, validateLogin_, clean_ } = useFormHook();

	const navigate = useNavigate();

	const submit_ = (e, action) => {
		e.preventDefault();

		switch (action) {
			case 'sign':
				navigate('/signup');
				break;
			case 'login':
				if (validateLogin_()) {
					console.log(form_data);
				} else {
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
					<FormButtonS onClick={(e) => submit_(e, 'sign')}>I need Account !</FormButtonS>
					<FormButtonS onClick={(e) => submit_(e, 'login')}>Login</FormButtonS>
					<FormButtonS onClick={(e) => submit_(e, 'home')}>Home</FormButtonS>
				</FormTitleS>
			</FormS>
		</ContainerS>
	);
};

export default Login;
