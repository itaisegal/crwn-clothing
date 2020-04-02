import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import './login.styles.scss';

const Login = ({ emailSignInStart, googleSignInStart }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const { email, password } = userData;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className='login'>
      <h2 className='title'>I already have an account</h2>
      <span className='sub-title'>Login with your email and password</span>

      <form action='' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='email'
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          value={password}
          handleChange={handleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Login</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogle>
            Login with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Login);
