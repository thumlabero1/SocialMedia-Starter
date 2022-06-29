import React from 'react'
import './InforCard.css'
import {UilPen} from '@iconscout/react-unicons'
export const InforCard = () => {
  return (
        <div className="InforCard">
            <div className="InfoHead">
                <h4>Your info</h4>
                <div>
                  <UilPen width='2rem' height ='1.2rem'/>
                  </div>
            </div>
            <div className="Info">
              <span>
                <b>status </b>
              </span>
              <span>
                in relationship
              </span>
            </div>

            <div className="Info">
              <span>
                <b>live in </b>
              </span>
              <span>
                Multan
              </span>
            </div>

            <div className="Info">
              <span>
                <b>work at </b>
              </span>
              <span>
                zaikeepcode
              </span>
            </div>
            <button className="button logout-button">Logout</button>
        </div>
  )
}

export default InforCard