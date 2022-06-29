import React from 'react'
import  './ProfileLeft.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import InforCard from '../InforCard/InforCard'
import FollowerCard from '../FollowCard/FollowersCard'
export const ProfileLeft = () => {
  return (
    <div className="Profileleft">
        <LogoSearch/>
        <InforCard/>
        <FollowerCard/>
    </div>
    
  )
}
export default ProfileLeft