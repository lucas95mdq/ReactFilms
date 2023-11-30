import axios from "axios";

const VITE_APP_TMDB_API_KEY = "a332d0824bd2c9d5acc4a1f5f6439682"

const VITE_APP_TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzMyZDA4MjRiZDJjOWQ1YWNjNGExZjVmNjQzOTY4MiIsInN1YiI6IjY1NGZhZTc1MDgxNmM3MDBjM2Q4YWFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nmNUbDJd8z0jHgdjPSdHIJLReBbvDoOZwtBoCR5zHiU"


export const tmdb_api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${VITE_APP_TMDB_TOKEN}`
    },
    params: {
        api_key: VITE_APP_TMDB_API_KEY,
        language: 'es-ES',
    },
})

export const tmdb_paths = {
    movies: {
      popular: "/movie/popular",
      top_rated: "/movie/top_rated",
      upcoming: "/movie/upcoming",
      nowPlaying: "/movie/now_playing",
      search: "/search/movie",
    },
    movie: {
      id: "/movie/"
    },
    tv: {
      popular: "/tv/popular",
      top_rated: "/tv/top_rated",
      airing_today: "/tv/airing_today",
    },
    images: {
      poster: {
        sizes: {
          w92: "/w92",
          w154: "/w154",
          w185: "/w185",
          w342: "/w342",
          w500: "/w500",
          w780: "/w780",
          original: "/original",
        },
        url: "https://image.tmdb.org/t/p",
      },
      backdrop: {
        sizes: {
          w300: "/w300",
          w780: "/w780",
          w1280: "/w1280",
          original: "/original",
        },
        url: "https://image.tmdb.org/t/p",
    },
  }};