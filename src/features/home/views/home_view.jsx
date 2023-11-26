import React from 'react'
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import Sercher from '../../Components/sercher/Sercher';
import SwiperContainer from '../../Components/appSwiper/swiper_container';

import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies_services';
import useSwr from 'swr';
import { getAiringTodaygTv, getPopularTv, getTopRatedTv } from '../services/tv_services';
import BannerContainer from '../../Components/banner/banner_container';





const HomeView = () => {


  const {data: popularMovies, error: popularMoviesError, isLoading: popularMoviesIsLoading } = useSwr('getPopularMovies', getPopularMovies);
  const {data: topRatedMovies, error: topRatedError, isLoading: topRatedIsLoading } = useSwr('getTopRatedMovies', getTopRatedMovies);
  const {data: upcomingMovies, error: upcominError, isLoading: upcominIsLoading } = useSwr('upcominMovies', getUpcomingMovies);
  const {data: populatTv, error: populatTvError, isLoading: populatTvIsLoading } = useSwr('populatTvs', getPopularTv);
  const {data: topRatedTvs, error: topRatedTvsError, isLoading: topRatedTvsIsLoading } = useSwr('topRatedTvs', getTopRatedTv);
  const {data: airingTodaygTv, error: airingTodaygTvError, isLoading: airingTodaygTvIsLoading } = useSwr('airingTodaygTv', getAiringTodaygTv);
  //const {data: nowPlayingMovies, error: nowPlayingMoviesError, isLoading: nowPlayingMoviesIsLoading } = useSwr('nowPlayingMovies', getAiringTodaygTv);
  
//Math.floor(Math.random()*20)

  
  return (
    <div>
        <Sercher/>  
        {popularMovies ? <BannerContainer data={popularMovies}></BannerContainer> : null}
        <SwiperContainer title={"MAS POPULARES"} data={popularMovies}/>
        <SwiperContainer title={"MEJOR RANKEADAS"} data={topRatedMovies}/>
        <SwiperContainer title={"PROXIMAMENTE"} data={upcomingMovies}/>
        <SwiperContainer title={"SERIES MAS POPULARES"} data={populatTv}/>
        <SwiperContainer title={"SERIES MEJOR RANKEADAS"} data={topRatedTvs}/>
        <SwiperContainer title={"AL AIRE HOY"} data={airingTodaygTv}/>

        <Footer/>

    </div>

  )
}

export default HomeView;