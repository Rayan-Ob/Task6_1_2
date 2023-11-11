import React from 'react'
import "./Slide.css"

const Slide = (props) => {
        const {number,color} = props
  return (
    <div>
        <div className="slide " style={{backgroundColor:color}}><p>{number}</p></div>
    </div>
  )
}

export default Slide