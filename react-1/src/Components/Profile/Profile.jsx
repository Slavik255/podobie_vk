import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;
