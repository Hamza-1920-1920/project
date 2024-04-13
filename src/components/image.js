import React from 'react'
import product from '../product.js'

const Image = () => {
  return (
    <img style={{borderRadius:20}} src={product.imgsrc}/>
  )
}

export default Image