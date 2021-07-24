import React, { Component } from 'react'
class Register extends Component{

  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      name:""

    }
  }
render() {
  
  const onEmailChange = (event) => {
    this.setState(
      {
        email:event.target.value
      }
    )
  }

  const onPassChange = (event) => {
    this.setState(
      {
        pass:event.target.value
      }
    )
  }

  const onNameChange = (event) => {
    this.setState(
      {
        name:event.target.value
      }
    )
  }
    return (
        <article  className="br3 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 tcfw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input onChange = {onNameChange}className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75" type="text"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input  onChange = {onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75" type="email"/>
            </div>
          </fieldset>
          <div className="">
         
          </div>
          <div className="lh-copy mt3">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
            onClick = {() => {
              fetch('https://calm-hollows-99876.herokuapp.com//register',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                  email:this.state.email,
                  name:this.state.name
                })
              }).then((response)=>{
                response.json().then((res)=>{
                  console.log(res)
                  this.props.loadUser(res)
                  this.props.onRouteChange('home');

              
                })
              })
            
            
            }}
            value="Register"/>
          </div>
      </main>
      </article>
      
        
    )
}}
export default Register