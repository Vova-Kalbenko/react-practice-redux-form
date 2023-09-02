import React from 'react'
import { useParams } from 'react-router-dom'
const Subbreeds = () => {
    const params = useParams()
  return (
    <div> Subbreeds : {params.dogId}</div>
  )
}

export default Subbreeds