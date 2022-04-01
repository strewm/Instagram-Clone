import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as followingActions from '../../store/followers';
import noPic from '../Images/no-profile-alt.jpg';

import './ProfileCard.css';


function ProfileCard() {
//   const dispatch = useDispatch();
//   const { userId }  = useParams();

//   const [user, setUser] = useState({});
//   const [following, setFollowing] = useState([]);
//   const [followers, setFollowers] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [update, setUpdate] = useState(false);

  const current_user = useSelector((state) => state.session.user);


//   useEffect(async() => {
//       const res_user = await fetch(`/api/users/${userId}`);
//       const res_following = await fetch(`/api/follow/${userId}/following`);
//       const res_followers = await fetch(`/api/follow/${userId}/followers`);
//       const res_posts = await fetch(`/api/posts/user/${userId}`);

//       const user = await res_user.json();
//       const following = await res_following.json();
//       const followers = await res_followers.json();
//       const posts = await res_posts.json();

//       setUser(user);
//       setFollowing(following);
//       setFollowers(followers);
//       setPosts(posts)
//       setUpdate(false)
//   }, [dispatch, update, userId]);

//   const handleFollow = async () => {
//     dispatch(followingActions.followUser(current_user, +userId))
//     const res = await dispatch(followingActions.getAllFollowers(userId))
//     setUpdate(true)
//     if (res.ok) {
//       const data = res.json()
//       setFollowers(data)
//       return data
//     }
//   }

//   const handleUnfollow = async () => {
//     dispatch(followingActions.unfollowUser(current_user, +userId))
//     const res = await dispatch(followingActions.getAllFollowers(userId))
//     setUpdate(true)
//     if (res.ok) {
//       const data = res.json()
//       setFollowers(data)
//       return data
//     }
//   }

//   if (!user) {
//     return null;
//   }
//   let validated = false

//   if (+userId === current_user) {
//     validated = true
//   }

//   let follow;

//   if (followers[current_user]) {
//     follow = <button id='unfollow-butt' onClick={handleUnfollow}>Unfollow</button>
//   } else if (validated) {
//     follow = <button id='edit-butt' onClick={() => setShowModal(true)}>Edit Profile</button>
//   } else {
//     follow = <button id='follow-butt' onClick={handleFollow}>Follow</button>;
//   }


  return (
    <div className='profile-card-container'>
        <div id='profile-card-picture'>
            <img src={current_user.profile_picture || noPic} style={{"height": "130px", "width": "130px"}} alt='profile-picture'></img>
        </div>
        <div id='profile-card-info'>
            <span id='row-one'>
                <div id='profile-username'>{current_user.username}</div>
            </span>
            <span id='row-three'>
                <div><b>{current_user.first_name} {current_user.last_name}</b></div>
            </span>
            <span id='row-four'>
                <div>{current_user.biography}</div>
            </span>
        </div>
    </div>
  );
}
export default ProfileCard;
