import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData'
const TrendCard = ()=>{
    return(
        <div className="TrendCard">
            <h3> Trends for you</h3>
            {TrendData.map((TrendData)=>{
                return (
                    <div className="trend">
                        <span>
                            #{TrendData.name}
                            {TrendData.shares}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard