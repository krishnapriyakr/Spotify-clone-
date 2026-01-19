import React from 'react'
import './styles/sidebar.css'


function Sidebar() {
  return (
      <>
          <div className="side  text-white border   ">
              <div className="bar  rounded" >
                <div className="pages">
                     <a   href="#"><i class="fa-solid fa-house fa-xl"></i> <b>Home </b>  </a>   
                </div>
                <div className="pages">
                     <a  href="#"> <i class="fa-solid fa-magnifying-glass fa-xl "></i> <b> Search </b> </a>   
                </div>
        </div>
        <div className="library  rounded">
          <div className="next">
          <div className="page">
              <a  href="#"> <i class="fa-solid fa-house fa-xl "></i> <b> Your Library </b>  </a>  
            </div>
            <div className="arrows">
              <button className='btn'> <i class="fa-regular  fa-plus fa-lg "></i> </button>
              <button className='btn'> <i class="fa-solid fa-arrow-right fa-lg "></i> </button>   
            </div>
          </div>
          <div className="create  rounded ">
            <h6> <b> Create your first playlist </b>  </h6>
            <p>It's easy,we'll help you </p>
             <button className='btn1' id='btn0' >  Create playlist   </button>
          </div>
          
          <div className="create  rounded mt-4 ">
            <h6> <b> Let's  find some podcasts to follow </b>  </h6>
            <p>We'll keep you updated on new episodes </p>
             <button className='btn1' id='btn1' >  Browse podcasts   </button>
          </div>
          
        </div>
        
          </div> 
    </>
  )
}

export default Sidebar