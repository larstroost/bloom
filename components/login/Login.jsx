import React from 'react';
import Router from 'next/router';

import Button from '../../shared/components/button/Button';

import './login.scss';

class Login extends React.Component {
  static initialState = {
    login: {
      emailLogin: '',
      password: ''
    },
    validity: {
      emailLogin: true,
      password: true
    }
  }

  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
  }

  state = { ...Login.initialState };

  checkInputValidity = (element) => element.validity.valid

  checkFormValidity = () => this.loginRef.current
    && Array.from(this.loginRef.current.elements).every(this.checkInputValidity);

  handleLogin = () => {
    Router.push('/timesheets');
  };

  handleBlur = ({ target }) => {
    this.setState((state) => ({
      validity: {
        ...state.validity,
        [target.name]: target.validity.valid
      }
    }));
  }

  handleChange = ({ target }) => {
    this.setState((state) => ({
      login: {
        ...state.login,
        [target.name]: target.value
      }
    }));
  }

  render() {
    const { login, validity } = this.state;
    const { emailLogin, password } = login;
    return (
      <section className="login">
        <div className="login__screen">
          <form
            className="login__form"
            ref={this.loginRef}
          >
            <h1 className="login__header">
              team awesome
            </h1>
            <label
              htmlFor="emailLogin"
              className="login__label"
            >
              Email address
              <input
                className={`
                  login__input
                  login__input--${validity.emailLogin ? 'valid' : 'invalid'}
                `}
                id="emailLogin"
                name="emailLogin"
                placeholder="human.oids@humanoids.nl"
                required
                title="Please enter your email address"
                type="text"
                value={emailLogin}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
            <label
              htmlFor="password"
              className="login__label"
            >
              Password
              <input
                className={`
                  login__input
                  login__input--${validity.password ? 'valid' : 'invalid'}
                `}
                id="password"
                name="password"
                placeholder="*******"
                required
                title="Please enter your password"
                type="text"
                value={password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
            <Button
              className={`
                login__submit
                login__submit--${this.checkFormValidity() ? 'valid' : 'invalid'}

              `}
              text="Sign In"
              onClick={this.handleLogin}
            />
          </form>
          <div className="login__forgot-password">
            Forgot Password?
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
