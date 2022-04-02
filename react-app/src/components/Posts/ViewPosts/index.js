import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from "../../../store/post";
import PostDetail from "./PostDetail";
import ProfileCard from "../../ProfileCard";
import Footer from "../../Footer";
import './ViewPosts.css';


const ViewPosts = () => {
    const user = useSelector(state => state.session.user);
    const viewPosts = useSelector(state => state.post);
    const [update2, setUpdate2] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts(user.id));
    }, [dispatch, update2])

    const viewPostsArr = Object.values(viewPosts);
    const viewPostsArrReverse = viewPostsArr.reverse();


    return (
        <div className='home-page'>
            <div className='main-home-container'>
                <div className='home-left'>
                    <div className='post-welcome-container'>
                        <h1>Welcome, {user.username}</h1>
                    </div>
                    {viewPostsArrReverse.map(post => (
                        <PostDetail post={post} key={post.id} />
                    ))}
                </div>
                <div className='home-right'>
                    <ProfileCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewPosts;
