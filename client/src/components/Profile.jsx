import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//import { SIGNUP_USER } from '../utils/mutations';

import { QUERY_PROFILE } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {

  const profile_id = Auth.getProfile().data._id;
  
  const { loading, data, error } = useQuery(
    QUERY_PROFILE, {
      variables: { profile_id }
    }
  );
  if (!data) return false;
  console.log('Profile', data);
  if(error){
    console.error('query error', error);
  }

  const profile = data.user;

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
  //   return <Redirect to="/me" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }


  return (
    <div>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age} </p>
      <p>Weight: {profile.weight}kg</p>
      <p>Gender: {profile.gender}</p>
    </div>
  )
}

export default Profile