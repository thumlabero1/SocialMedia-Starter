import React from 'react'  
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
const FollowersCard =() =>{
    return(
        <div className="FollowersCard">
            <h3>
                who is following you
            </h3>
            {
                Followers.map((followers,id)=>{
                    return <div className="followers">
                        
                            <div>
                                <img src={followers.img} alt="" className='followerImg'/>
                                
                                <div className="name">
                                
                                    <span>
                                        
                                        {followers.name}
                                        </span>
                                    <span>
                                        @{followers.username}
                                        </span>
                                </div>
                                <button className="button fc-button">Follow</button>
                            </div>
                            
                        </div>
                        
                })
            }
        </div>
    )
}
export default FollowersCard