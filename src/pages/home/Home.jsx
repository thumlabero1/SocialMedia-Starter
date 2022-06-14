import React from 'react'
import './Home.css'
import ProfileSize from '../../components/ProfileSize/ProfileSize'
import PostSize from '../../components/PostSize/PostSize'
import RightSize from '../../components/RightSize/RightSize'
const Home = () => {
    return(
        <div className="Home">
        <ProfileSize/>
        <PostSize/>
        <RightSize/>
    </div>
    )
    
}

export default Home