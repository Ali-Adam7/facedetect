import React from 'react'
import Tilt from 'react-parallax-tilt';



const Logo = () => {

   
         return(
        <div className = 'ma4 mt0 tc' >
        <Tilt className = "Tilt br shadow-3" options = {{max:55}} style = {{height:'250px', width : '250px'}}> 
      <div className = "Tilt-inner pa5" style = {{textAlign:"center"}}>
      <img src="https://img.icons8.com/ios/192/000000/brain--v2.png"/>      </div>  
    </Tilt>
    </div>

    )
       }

export default Logo