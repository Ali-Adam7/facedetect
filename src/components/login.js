import React, {useState,useContext} from 'react';
import app from "../firebase"
import {getAuth,signInWithEmailAndPassword}  from "firebase/auth";
import  {collection, query, where } from "firebase/firestore";
import { getFirestore, getDocs } from "firebase/firestore";

const Login = (props) => {
  // Initialize Firebase
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const setUser = props.setUser
  const setUserData = props.setUserData
  const auth = getAuth(app);

  const log = async () =>{

  try{
    const db = getFirestore(app);
    await signInWithEmailAndPassword(auth, email, pass)
    const ref = collection(db, "Users");
    const q =  query(ref, where("Email", "==", email));
    const querySnapshot = await getDocs(q);
    setUserData(querySnapshot.docs[0].data())
    await auth.currentUser.reload()
    setUser(auth.currentUser)
  }
  
  catch (error) {
    console.log(error.message)
  }
} 
    return (    
      <div> <div style={{ display: "flex", justifyContent: 'center', margin:50}}> </div>
      { <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 tc">Login</legend>
 
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={(txt) =>setEmail(txt.target.value)}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(txt) =>setPass(txt.target.value)}
                />
              </div>
            </fieldset>
            <div className="mt3 tc">
              <input
                onClick={log}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Log in"
              />
            </div>
          </div>
        </main>
      </article>  }

      </div>
        )
  }
  export default Login