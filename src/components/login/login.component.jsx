import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { loginWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='login'>
        <h2 className='title'>I already have an account</h2>
        <span className='sub-title'>Login with your email and password</span>

        <form action='' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Login</CustomButton>
            <CustomButton onClick={loginWithGoogle} isGoogle>
              Login with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
