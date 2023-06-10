import React from 'react'

const FaceRec = ({ image, box}) => {
    return (

        <div className='face'>
            <div className=' absolute mt 2 '>
                <img id="inputimg"
                    src={image}
                    width="500px"
                    height='auto'
                    className = "grow"
                />

                
                <div className="box"
                    style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>

                </div>
              
            </div>
        </div>


    )

}
export default FaceRec