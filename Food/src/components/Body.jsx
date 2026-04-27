import React from 'react'
import "./Body.css"
const Body = ({img,name,price}) => {
  return (
    <div>
      <div className='card'>

      <img src={img} alt="" className='Abc' />
      <h4>{name}</h4>
      <p>{price}</p>
      <button className='buttonstyle'>order now </button>
      </div>
    </div>
  )
}

export default Body
