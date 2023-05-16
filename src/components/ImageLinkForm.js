import React from 'react'

const ImageLinkForm = ({onInputChange, onSubmit, name}) => {
    return(
        <div className = "tc">
        <h3 style = {{color: 'white'}}>{name.toUpperCase()}</h3>
        <div className = "pa4 shadow-5 br3"> 
        <input className = "f4 pa2 " type = "text"
        onChange= {onInputChange}
        placeholder = "Paste image link here"
        ></input>
        <button
        onClick = {onSubmit}
         className = " grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
        </div>
        </div>
    )
}
export default ImageLinkForm