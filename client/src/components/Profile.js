import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Profile = () => {
  return (
    <div>
      <p>Name: </p>
      <p>Email: </p>
      <p>Age: </p>
      <p>Weight: </p>
      <p>Gender: </p>
      
    </div>
  )
}

export default Profile