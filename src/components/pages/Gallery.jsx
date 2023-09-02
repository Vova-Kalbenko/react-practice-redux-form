import React from 'react'
import { useParams } from 'react-router-dom'

const Gallery = () => {
    const {dogId} = useParams()
  return (
    <div> IMAGE Gallery : {dogId}</div>
  )
}

export default Gallery