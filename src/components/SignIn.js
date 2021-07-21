import React, { Component } from 'react'
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: ""

    }
  }

  render(){
    const {onRouteChange} = this.props;
    const {loaduser} = this.props;

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
    return(
      <article  className="br3 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 tcfw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input onChange = {onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75" type="email"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input onChange = {onPassChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75" type="password"/>
          </div>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
          onClick = {() => {
            fetch('http://localhost:3000/signin',{
              method:'post',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                email:this.state.email,
                password:this.state.pass
              })
            }).then((response)=>{
              response.json().then((res)=>{
                if(res == 'sucess'){
                  console.log(res)
                  fetch('http://localhost:3000/profile/' + this.state.email).then((userres) =>{
                    userres.json().then((user)=>{
                      this.props.loadUser(user)
                      this.props.onRouteChange('home');

                    })
                  })

                }
            
              })
            })
          
          
          }}
          value="Sign in"/>
        </div>
        <div className="lh-copy mt3">
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent  pointer f6 dib" type="submit" 
          onClick = {() => onRouteChange('register')}
          value="Register"/>
        </div>
        <div className="lh-copy mt3">
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent  pointer f6 dib" type="submit" 
          onClick = {() => onRouteChange('home')}
          value="Skip (Front-End only)"/>
        </div>
        
    </main>
    </article>
    )
  }
}



export default SignIn

