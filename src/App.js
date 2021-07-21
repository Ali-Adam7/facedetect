import React, { Component } from 'react';
import './index.css';
import './components/Logo.css'
import 'tachyons'
import Navigation from './components/Navigation'
import Logo from './components/Logo.js'
import ImageLinkForm from './components/ImageLinkForm.js'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import FaceRec from './components/FaceRec'
import SignIn from './components/SignIn.js'
import Register from './components/Register.js'

const app = new Clarifai.App({
  apiKey: 'b141f9f6bef94672b8220b74330d2b43'
})



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Detect Face',
      input: '',
      image: '',
      box: {},
      route: 'signin',
      signedin: false,
      user: {

  id:'',
  name:'',
  email:"",
  password:'',
  entries:0,
  joined: ''
      },
      entries:0,


    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/").then((response)=>{
      response.json().then((res)=>{
        console.log(res)
      })
    })
  }
 
  calculateLocation = (data) => {
    let Face = data.outputs[0].data.regions[0].region_info.bounding_box
    let image = document.getElementById('inputimg')
    let width = Number(image.width);
    let height = Number(image.height);
    return {

      leftCol: Face.left_col * width,
      topRow: Face.top_row * height,
      rightCol: width - (Face.right_col * width),
      bottomRow: height - (Face.bottom_row * height)


    }

  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  expression = (data) =>{
    let name = (data.outputs[0].data.regions[0].data.concepts[0].name);
    this.setState({
      name: name
    })
  }
  onInputChange = (event) => {
    this.setState({
      input: event.target.value,

    })
  }
loadUser = ({name,email,password,id,entries,joined}) =>{

this.setState({
  user:{
    id:id,
    name:name,
    email:email,
    password:password,
    joined: joined
  },
  entries:entries,


})
}

signOutUser = () =>{

    this.setState({

      name:'Detect Face',
      input: '',
      image: '',
      box: {},
      route: 'signin',
      signedin: false,
      user:{
        id:'',
        name:'',
        email:"",
        password:'',
        joined: ''
      },
      entries:0,
    
    })
 
}
  onSubmit = () => {

    this.setState({
      image: this.state.input

    })

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then((response) => {
      this.displayFaceBox(this.calculateLocation(response));
      app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input).then((response2) =>{
        
        this.expression(response2)
        if(this.state.user.name != ''){

       
        fetch('http://localhost:3000/img', {
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            email:this.state.user.email,
          })
        }).then((response) =>{
          response.json().then((res)=>{
            this.setState({
              entries:res
            })
          })
       
        })
      }





      })
      
    }).catch(err => {

    })



  }

  onRouteChange = (route) => {
    if(route == 'home'){
      this.setState({
        signedin : true
      })
    } 
    else {
      this.setState({
        signedin : false
      })
    
    }
    this.setState({
      route : route
    })

  }
  render() {


    return (

      <div className="App">
        <Particles className="particles"
          param={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "random": true,
                "direction": "none",
                "bounce": true,
                "out_mode": "bounce",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }

            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,

          }}

        />
        <Navigation  onRouteChange={this.onRouteChange}  signOutUser = {this.signOutUser}  isSignedIn = {this.state.signedin}/>
        {
          this.state.route == 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} loadUser = {this.loadUser} />
            : (

              this.state.route == 'register' ?  <Register onRouteChange={this.onRouteChange} loadUser = {this.loadUser} />
              :       <div> <div style={{ display: "flex", justifyContent: 'center' }}><Logo name = {this.state.user.name} entries = {this.state.entries}/> </div>


              <div style={{ display: "flex", justifyContent: 'center' }}><ImageLinkForm
                onSubmit={this.onSubmit}
                onInputChange={this.onInputChange} 
                name = {this.state.name}/> </div>
              <FaceRec image={this.state.image} box={this.state.box}/>
            </div>

            )
            
      

        }
      </div>
    );
  }
}

export default App;
