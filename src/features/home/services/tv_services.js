import { tmdb_api, tmdb_paths } from "../../../core/datasource/tmdb/tmdb_api";
import { tmdbMoviesAdapter } from "./adapter/tmdb_adapter";

export const getPopularTv = async () => {

    const {data} = await tmdb_api.get(tmdb_paths.tv.popular);
    return tmdbMoviesAdapter(data);
}

export const getTopRatedTv = async () => {

    const {data} = await tmdb_api.get(tmdb_paths.tv.top_rated);
    return tmdbMoviesAdapter(data);
}

export const getAiringTodaygTv= async () => {

    const {data} = await tmdb_api.get(tmdb_paths.tv.airing_today);
    return tmdbMoviesAdapter(data);
}
