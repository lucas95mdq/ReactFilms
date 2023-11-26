import React from 'react'
import { useParams } from 'react-router-dom'

const MovieView = () => {

  const {id} = useParams()
  return (
    <div>MovieView: {id}</div>
  )
}

export default MovieView