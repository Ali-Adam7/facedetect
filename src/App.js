import React, { Component } from 'react';
import './index.css';
import './components/Logo.css'
import 'tachyons'
import Navigation from './components/Navigation'
import Logo from './components/Logo.js'
import ImageLinkForm from './components/ImageLinkForm.js'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey:'c0c0ac362b03416da06ab3fa36fb58e3'
})


class App extends Component {
  constructor() {
    super();
    this.state = {
      input : ''
    }
  }
 
  onInputChange = (event) => {
    this.setState ({
      input : event.target.value
    })
  }
  
  onSubmit = () =>{
    console.log(this.state.input)
    app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input).then(
      function(response){

      },
      function(err) {

      }
      );

   
  }
render() {
  

  return (
    
    <div className = "App">
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
    <Navigation/>
    <div style = {{display:"flex",justifyContent:'center'}}><Logo/> </div>

    <div style = {{display:"flex",justifyContent:'center'}}><ImageLinkForm 
    onSubmit = {this.onSubmit}
    onInputChange = {this.onInputChange}/> </div>
  </div>
  );
}}

export default App;
