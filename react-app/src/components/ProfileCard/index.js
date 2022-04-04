import React from 'react';
import { useSelector } from 'react-redux';

import noPic from '../Images/no-profile-alt.jpg';

import './ProfileCard.css';


function ProfileCard() {
  const current_user = useSelector((state) => state.session.user);


  return (
    <div className='profile-card-container'>
        <div className='profile-card'>
            <img src={current_user.profile_picture || noPic} style={{"height": "55px", "width": "55px"}} alt='profile-picture'></img>
            <div id='profile-card-info'>
                <div id='profile-card-username'>{current_user.username}</div>
                <div id='profile-card-name'>{current_user.first_name} {current_user.last_name}</div>
            </div>
        </div>
        <div className='profile-suggestions'>
            <div>Suggestions For You</div>
        </div>
    </div>
  );
}
export default ProfileCard;
