import React, { Component, createContext, createFactory, useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Profile from './Profile';

class Dashboard extends Component {
    render() {
        return (
            <div className="col-md-4">
                <Profile></Profile>
            </div>
        );
    }
}

export default Dashboard;