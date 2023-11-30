import React from 'react'
import List from './List'


const ListContainer = ({movies, moviesError, moviesIsLoading}) => {
  return (
   <List data={movies} error={moviesError} isLoading={moviesIsLoading}/>
  )
}

export default ListContainer