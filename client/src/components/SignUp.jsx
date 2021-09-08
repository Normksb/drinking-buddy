import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import '../utils/css/login.scss';

const SignUp = (props) => {
    const [formState, setFormState] = useState({ email: '',
                                                 password: '',
                                                 age: '',
                                                 weight: '',
                                                 name: '',
                                                 gender: ''
                                                 });
                                                 
    const [signUp, { error, data }] = useMutation(SIGNUP_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value, type } = event.target;
      let val = value;
      if(type == 'number'){
        val = parseInt(value);
      }
      setFormState({
        ...formState,
        [name]: val,
      });
      console.log(formState);
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await signUp({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
        
        // clear form values
        // setFormState({ email: '',
        //   password: '',
        //   age: '',
        //   weight: '',
        //   name: '',
        //   gender: '',
        // });
      } catch (error) {
        console.error(error.message);
      }
  
    };
    return (
      <div class="container">
        <div class="row text-center">
          <form className="form-signup" onSubmit={handleFormSubmit}>
            <img className="mb-4" src="images/dblogo-black-200.png" alt="" width="200" />
            <h1 className="h3 mb-3 font-weight-normal">REGISTER</h1>
            {error && (
              <div className="my-2 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            <label for="inputName" className="sr-only">Name</label>
            <input
              id="inputName"
              className="form-control rounded-top"
              placeholder="Your Name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <label for="inputEmail" className="sr-only">Email address</label>
            <input
              id="inputEmail"
              className="form-control rounded-0"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label for="inputPassword" className="sr-only">Password</label>
            <input
              id="inputPassword"
              className="form-control rounded-0"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <label for="inputAge" className="sr-only">Age</label>
            <input
              id="inputAge"
              className="form-control rounded-0"
              placeholder="Your Age"
              name="age"
              type="number"
              value={formState.age}
              onChange={handleChange}
            />
            <label for="inputWeight" className="sr-only">Weight</label>
            <input
              id="inputWeight"
              className="form-control rounded-0"
              placeholder="Your weight in Kgs"
              name="weight"
              type="number"
              value={formState.weight}
              onChange={handleChange}
            />
            <label for="gender" className="sr-only">Gender</label>
            <select id="gender" name="gender" className="form-control mb-4 rounded-bottom" onChange={handleChange}>
                <option value="">Choose Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <button
              style={{ cursor: 'pointer' }}
              type="submit"
              className="btn btn-lg btn-primary btn-block db-btn db-btn-yellow"
            >
              SIGN UP
            </button>
            <br />or<br />
            <Link to="/" className="btn btn-lg btn-secondary btn-block mt-4 db-btn">Login</Link>
          </form>
        </div>
      </div>
        
    );
}

export default SignUp