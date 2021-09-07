import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import '../utils/css/login.scss';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      //console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (error) {
        console.error(error.message);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
  
    return (
      <div class="container">
        <div class="row text-center">
          <form className="form-signin" onSubmit={handleFormSubmit}>
            <img className="mb-4" src="images/dblogo-black-200.png" alt="" width="200" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            {error && (
              <div className="my-2 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            <label for="inputEmail" className="sr-only">Email address</label>
            <input
              id="inputEmail"
              className="form-control"
              placeholder="Your email"
              autoComplete="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label for="inputPassword" className="sr-only">Password</label>
            <input
              id="inputPassword"
              className="form-control"
              placeholder="******"
              autoComplete="current-password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              style={{ cursor: 'pointer' }}
              type="submit"
              className="btn btn-lg btn-primary btn-block db-btn db-btn-yellow"
            >
              Sign in
            </button>
            <br />or<br />
            <Link to="/signup" className="btn btn-lg btn-secondary btn-block mt-4 db-btn">Register</Link>
          </form>
        </div>
      </div>
      
    );
  };
  
  export default Login;