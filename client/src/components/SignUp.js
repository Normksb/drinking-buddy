import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

import Auth from '../utils/auth';

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
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await signUp({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (error) {
        console.error(error.message);
      }
  
      // clear form values
      setFormState({ email: '',
      password: '',
      age: '',
      weight: '',
      name: '',
      gender: '',
      });
    };
    return (
        <div>
                  <form onSubmit={handleFormSubmit}>
                    <input
                      className="form-input"
                      placeholder="Your Name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Your Age"
                      name="age"
                      type="number"
                      value={formState.age}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Your weight in Kgs"
                      name="weight"
                      type="number"
                      value={formState.weight}
                      onChange={handleChange}
                    />
                    <select id="gender">
                        <option value="male">male</option>
                        <option value="female">female</option>

                    </select>
                    <button
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                
          </div>
        
      );
}

export default SignUp