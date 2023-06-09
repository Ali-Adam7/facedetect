import React, {useState,useContext} from 'react';
import auth from "../firebase"
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import Register from "./register"
import Login from "./login"

const Welcome = (props) => {
  // Initialize Firebase
const setSkip = props.setSkip
const setUser = props.setUser
const setUserData = props.setUserData
const [route,setRoute] = useState("")
    return (
      <div> 
        {route == "register" ? <Register setUser = {setUser} /> : route == "login" ? <Login setUserData = {setUserData} setUser = {setUser} /> :            
        
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
         <main className="pa4 black-80">
             <div className="mt3 tc">
               <input
                 onClick={() => setRoute("register")}
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                 type="submit"
                 value="Register"
               />
             </div>
             
             <div className="mt3 tc">
               <input
                 onClick={() => setRoute("login")}
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                 type="submit"
                 value="Login"
               />
             </div> 
             
             <div className="mt3 tc">
               <input
                 onClick={() => {setSkip(true)}}
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                 type="submit"
                 value="Front-End only"
               />
             </div>
         
      
     
         </main>
       </article>  
     }
    </div>
        )
  }
  export default Welcome

