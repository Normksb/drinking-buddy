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
    <div className="card order-info">
      <div className="card-body">
        <h4 className="card-title">{profile.name}</h4>
        <p className="card-text">{profile.email}</p>
      </div>
      <ul className="collapse list-group list-group-flush" id="profile">
        <li className="list-group-item"><strong>Age</strong> {profile.age}</li>
        <li className="list-group-item"><strong>Weight</strong> {profile.weight}</li>
        <li className="list-group-item"><strong>Gender</strong> {profile.gender}</li>
      </ul>
      <div className="card-footer">
        <a href="/" className="card-link">Edit</a>
        <button data-target="#profile" className="btn btn-sm float-right" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="profile-info">
          Toggle Info
        </button>
      </div>
    </div>
  )
}

export default Profile