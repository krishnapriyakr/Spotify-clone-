import React from 'react'
import './styles/player.css'

function Player() {
  return (
      <>
          
      <div className="player">
        <div className="next">
          <img src="" alt="" />
        </div>
        <p>name</p>
        <p>description</p>
      
      </div>
      <div className="symbols">
        <div className="icons">
          {/* <img src={<i class="fa-regular  fa-plus fa-lg "></i>} alt="" />
          <img src={<i class="fa-regular  fa-plus fa-lg "></i>} alt="" />
          <img src={ <i class="fa-regular  fa-plus fa-lg "></i> } alt="" /> */}
          <p><i class="fa-regular  fa-plus fa-lg "></i> </p>
          <p><i class="fa-regular  fa-plus fa-lg "></i> </p>
          <p> <i class="fa-regular  fa-plus fa-lg "></i> </p>
        </div>
      </div>
      
      </>
  )
}

export default Player