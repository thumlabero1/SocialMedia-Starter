import React from 'react'
import './RightSize.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../../components/TrendCard/TrendCard'
const RightSize = ()=>{
    return(
       <div className="RightSize">
           <div className="NavIcons">
               <img src={Home} alt="" />
               <UilSetting/>
               <img src={Noti} alt="" />
               <img src={Comment} alt="" />
           </div>

           <TrendCard/>
       </div>
    )
}
export default RightSize