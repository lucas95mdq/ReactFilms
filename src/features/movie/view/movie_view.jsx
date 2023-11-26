import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getMovieDetails } from '../services/movie_detail_services'
import { tmdb_api, tmdb_paths } from '../../../core/datasource/tmdb/tmdb_api'
import Footer from '../../Components/footer/Footer'
import Header from '../../Components/header/Header'

const MovieView = () => {

  const {id} = useParams()
  // useEffect(()=>{
  //   const getMovie = async (identificaor) => {
  //   await tmdb_api.get(`${tmdb_paths.movie.id}${identificaor}`)
  // }
  // const {data} = getMovie(id)
  // }
  // ,[id])

  const {data: movieDetails, error: movieDetailsError, isLoading: movieDetailsIsLoading } = useSWR('getMovieDetails', getMovieDetails(id));
  console.log(movieDetails)
  

  return (
    <div>
      <Header/>
      <h1></h1>
      <h2></h2>
      <Footer></Footer>
    </div>
  )
}

export default MovieView