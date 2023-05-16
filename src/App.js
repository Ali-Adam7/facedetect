import React, { Component } from 'react';
import './index.css';
import './components/Logo.css'
import 'tachyons'
import Logo from './components/Logo.js'
import ImageLinkForm from './components/ImageLinkForm.js'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import FaceRec from './components/FaceRec'

const app = new Clarifai.App({
  apiKey: '0676ebddd5d6413ebdaa101570295a39'
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Detect Face',
      input: '',
      image: '',
      box: {},
      route: 'home',
    }
  }

 
  calculateLocation = (data) => {
    data = JSON.parse(data)

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
    data = JSON.parse(data)
 
    let name = (   data.outputs[0].data.regions[0].data.concepts[0].name);
    this.setState({
      name: name
    })
    console.log(name)
  }
  onInputChange = (event) => {
    this.setState({
      input: event.target.value,

    })
  }


  onSubmit = () => {

    this.setState({
      image: this.state.input

    })
    console.log("submitted")



// URL of image to use. Change this to your image.


const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": this.state.input
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + 'beb7f200cfa7481c8963231c1cf454e4'
    },
    body: raw
};
fetch(`https://api.clarifai.com/v2/models/celebrity-face-detection/versions/2ba4d0b0e53043f38dbbed49e03917b6/outputs`, requestOptions)   .then(response =>   
    (response.text())).then((text)=>{
     this.expression((text))
     this.displayFaceBox(this.calculateLocation((text)));

     if(this.state.user.name != ''){

       
      fetch('localhost:80000/img', {
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

    .catch(error => console.log('error', error));




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
        
       <div> <div style={{ display: "flex", justifyContent: 'center', margin:50}}><Logo name = "u" entries = {this.state.entries}/> </div>


              <div style={{ display: "flex", justifyContent: 'center' }}><ImageLinkForm
                onSubmit={this.onSubmit}
                onInputChange={this.onInputChange} 
                name = {this.state.name}/> </div>
              <FaceRec image={this.state.image} box={this.state.box}/>
            </div>

            
            
      

        
      </div>
    );
  }
}

export default App;
