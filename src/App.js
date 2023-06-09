import React, { useContext, useEffect, useState,createContext } from 'react';

import './index.css';
import './components/Logo.css'
import 'tachyons'
import Logo from './components/Logo.js'
import ImageLinkForm from './components/ImageLinkForm.js'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import FaceRec from './components/FaceRec'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Register from "./components/register";
import Welcome from "./components/welcome";

const firebaseConfig = {
  apiKey: "AIzaSyBOwhdU8WFKoCGi8UGGmWVa8NPa3tva1Aw",
  authDomain: "facedetect-cd7b4.firebaseapp.com",
  projectId: "facedetect-cd7b4",
  storageBucket: "facedetect-cd7b4.appspot.com",
  messagingSenderId: "78088889240",
  appId: "1:78088889240:web:a7ea2eb724be51c92a81ed"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const ClarifaiApp = new Clarifai.App({
  apiKey: '0676ebddd5d6413ebdaa101570295a39'
})
const App = () =>  {
  const [name,setName] = useState('Detect Face')
  const [input,setInput]= useState('')
  const [image,setImage] =  useState('')
  const [box,setBox] = useState({})
  const [skip,setSkip] = useState(false)
  const [entries,setEntries] = useState({})
  const [user,setUser] = useState({name:"g"})



  const calculateLocation = (data) => {
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

 const displayFaceBox = (box) => {
    setBox(box)
  }

  const expression = (data) =>{
    data = JSON.parse(data)
    let name = (   data.outputs[0].data.regions[0].data.concepts[0].name);
    setName(name)
  }
 const onInputChange = (event) => {
    setInput(event.target.value)
  }


 const onSubmit = async () => {
    setImage(input)
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
                      "url": input
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
    let res = await fetch(`https://api.clarifai.com/v2/models/celebrity-face-detection/versions/2ba4d0b0e53043f38dbbed49e03917b6/outputs`, requestOptions)  
    let text = await res.text()
    expression((text))
    displayFaceBox(calculateLocation((text)));
  }


const Main = () => {
  return (     <div> 

  <div style={{ display: "flex", justifyContent: 'center' }}><ImageLinkForm
    onSubmit={onSubmit}
    onInputChange={onInputChange} 
    name = {name}/> </div>
  <FaceRec image={image} box={box}/>
  </div> )
}




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
    <div style={{ display: "flex", justifyContent: 'center', margin:50}}><Logo name = "u" entries = {entries}/> </div>
    {auth.currentUser || skip ?   <Main/>: <Welcome setSkip = {setSkip}/>}

      </div>
    );

}

export default App;
