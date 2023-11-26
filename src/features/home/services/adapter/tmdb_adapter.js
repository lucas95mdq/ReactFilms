import { tmdb_paths } from "../../../../core/datasource/tmdb/tmdb_api"

export const tmdbMoviesAdapter = (response) => {
    const {results} = response

    return (results.map((item) => ({
        id: item.id,
        title: item.title || item.name,
        poster: `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${item.poster_path}`,
        backdrop: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.w300}${item.backdrop_path}`,
        description: item.overview,
        rating: item.vote_average,
        video: item.video,
    })))
}