import React from 'react'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return(
        <div className = "tc">
        <p className = "p3">{'Detect Face'}</p>
        <div className = "pa4 shadow-5 br3"> 
        <input className = "f4 pa2 " type = "text"
        onChange= {onInputChange}></input>
        <button
        onClick = {onSubmit}
         className = " grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
        </div>
        </div>
    )
}
export default ImageLinkForm