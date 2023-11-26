import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import { getMovieDetails } from '../services/movie_detail_services'
import { tmdb_api, tmdb_paths } from '../../../core/datasource/tmdb/tmdb_api'
import Footer from '../../Components/footer/Footer'
import Header from '../../Components/header/Header'
import AppButton from '../../Components/button/AppButton'

const MovieView = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  // useEffect(()=>{
  //   const getMovie = async (identificaor) => {
  //   await tmdb_api.get(`${tmdb_paths.movie.id}${identificaor}`)
  // }
  // const {data} = getMovie(id)
  // }
  // ,[id])

  const { data: movieDetails, error: movieDetailsError, isLoading: movieDetailsIsLoading } = useSwr('getMovieDetails', ()=>getMovieDetails(id));

  console.log(movieDetails)
  

  return (
    <div>
      <Header>
        <AppButton onClick={()=> {navigate("/")}}>Inicio</AppButton>
      </Header>
      <div>
      <h1>{movieDetails.title}</h1>
      <h2>{movieDetails.tagline}</h2>
      <h3>{movieDetails.description}</h3>
      <h3>Rating: {movieDetails.rating}</h3>
      <h3>Generos</h3>
      <ul>
        {movieDetails.genres.map((genere, index) => (
            <li key={index}>{genere}</li>
        ))}
      </ul>
      <h4>duración: {movieDetails.time} minutos</h4>
      <img src={movieDetails.poster}/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MovieView