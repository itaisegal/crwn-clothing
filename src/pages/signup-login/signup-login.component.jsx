import React from 'react';
import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signup-login.styles.scss';

const SignupLogin = () => (
	<div className="sign-up-log-in">
		<Login />
		<SignUp />
	</div>
)

export default SignupLogin;