import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard';
import FollowersCard from '../../components/FollowCard/FollowersCard'
import './ProfileSize.css'
const ProfileSize = ()=>
{
    return(
        <div className="ProfileSize">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}
export default ProfileSize