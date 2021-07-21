import React from 'react'

const Navigation = ({onRouteChange, isSignedIn, signOutUser}) => {


        if(isSignedIn == true){
            return (
            <nav style = {{display:"flex", justifyContent:"flex-end",padding:"20px"}}>
            <p 
            onClick = {() => {
                onRouteChange('signin')
                signOutUser()
        }}
            className = "f3 link dim black underline pa3 pointer">Sign out</p>

        </nav> 
            )
        } else {
            return (
            <nav style = {{display:"flex", justifyContent:"flex-end",padding:"20px"}}>
            <p 
            onClick = {() => onRouteChange('register')}
            className = "f3 link dim black underline pa3 pointer">Register</p>

<p 
            onClick = {() => onRouteChange('signin')}
            className = "f3 link dim black underline pa3 pointer">Sign in</p>
            </nav>
            
        )
        }
    
    
}
export default Navigation