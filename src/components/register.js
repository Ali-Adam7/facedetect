import React, {useState,useContext} from 'react';
import app from "../firebase"
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification ,  } from "firebase/auth";
import { getFirestore, getDocs,doc ,setDoc } from "firebase/firestore";

const Register = (props) => {
  // Initialize Firebase
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [name,setName] = useState("")
  const setUser = props.setUser
  const auth = getAuth(app);
 const setUserData = props.setUserData
  const reg = async () =>{

  try{
   let userCredential = await createUserWithEmailAndPassword(auth, email, pass)
   sendEmailVerification(userCredential.user);
   await auth.currentUser.reload()
    let userData = {Name: name, Email: email, Faces : []}
    const db = getFirestore(app);
  await setDoc(doc(db, "Users", auth.currentUser.uid), 
    userData
  );
    setUserData(userData)
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
              <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(txt) =>{
                    setName(txt.target.value)
                  }}
                />
              </div>
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
                onClick={reg}
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
  export default Register