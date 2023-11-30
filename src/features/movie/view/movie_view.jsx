import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import { getMovieDetails } from '../services/movie_detail_services'
import Footer from '../../Components/footer/Footer'
import Header from '../../Components/header/Header'
import AppButton from '../../Components/button/AppButton'
import MovieSkeleton from '../components/movie_skeleton'
import MovieError from '../components/movie_error'
import Sercher from '../../Components/sercher/Sercher'
import useMovieSearch from '../../Components/sercher/useMovieSearch'
import ListContainer from '../../Components/list/list_container'

const MovieView = () => {



  const {id} = useParams()
  const navigate = useNavigate()
  const { data: movieDetails, error: movieDetailsError, isLoading: movieDetailsIsLoading } = useSwr('getMovieDetails', ()=>getMovieDetails(id));  



  const {
    query,
    movies,
    moviesError,
    moviesIsLoading,
    search
  } = useMovieSearch();

  console.log(query);

  return (
    <div>
      <Header>
        <AppButton onClick={()=> {navigate("/")}}>Inicio</AppButton>
        <Sercher onSearch={search}></Sercher>
      </Header>
      <>
      {query!='' ? 
        <ListContainer movies={movies} moviesError={moviesError} moviesIsLoading={moviesIsLoading}/>:
        <>
          {movieDetailsError ? 
            <MovieError/> : 
            movieDetailsIsLoading ? 
            <MovieSkeleton/> :
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
          }
      </>
      }
      
      </>

      <Footer></Footer>
    </div>
  )
}

export default MovieView