import React from "react";
import './Profile.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSize from '../../components/PostSize/PostSize'
import ProfileLeft from "../ProfileLeft/ProfileLeft";
const Profile = () =>
    {
        return(
            <div className="profile">
                <ProfileLeft/>
                <div className="Profile-center">
                    <ProfileCard/>
                    <PostSize/>
                </div>
            </div>
        )
    }
export default Profile