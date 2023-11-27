import React from 'react'
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import SwiperContainer from '../../Components/appSwiper/swiper_container';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies_services';
import useSwr from 'swr';
import { getAiringTodaygTv, getPopularTv, getTopRatedTv } from '../services/tv_services';
import BannerContainer from '../../Components/banner/banner_container';
import SwiperError from '../../Components/appSwiper/swiper_error';
import SwiperSkeleton from '../../Components/appSwiper/swiper_skeleton';
import BannerError from '../../Components/banner/banner_error';
import BannerSkeleton from '../../Components/banner/banner_skeleton';
import SwiperAdapter from '../componente/swiper_adapter';



const HomeView = () => {

  
  const {data: popularMovies, error: popularMoviesError, isLoading: popularMoviesIsLoading } = useSwr('getPopularMovies', getPopularMovies);
  const {data: topRatedMovies, error: topRatedError, isLoading: topRatedIsLoading } = useSwr('getTopRatedMovies', getTopRatedMovies);
  const {data: upcomingMovies, error: upcominError, isLoading: upcominIsLoading } = useSwr('upcominMovies', getUpcomingMovies);
  const {data: populatTv, error: populatTvError, isLoading: populatTvIsLoading } = useSwr('populatTvs', getPopularTv);
  const {data: topRatedTvs, error: topRatedTvsError, isLoading: topRatedTvsIsLoading } = useSwr('topRatedTvs', getTopRatedTv);
  const {data: airingTodaygTv, error: airingTodaygTvError, isLoading: airingTodaygTvIsLoading } = useSwr('airingTodaygTv', getAiringTodaygTv);


  return (
    <div>
      <Header/>
        {popularMoviesError ? 
        <BannerError/> : popularMoviesIsLoading ?
        <BannerSkeleton/> :
        <BannerContainer data={popularMovies}></BannerContainer>}
        {popularMoviesError ? <SwiperError/> : popularMoviesIsLoading ? <SwiperSkeleton/> : <SwiperContainer title={"MAS POPULARES"} data={popularMovies}/>}
        {topRatedError ? <SwiperError/> : topRatedIsLoading ? <SwiperSkeleton/> : <SwiperContainer title={"MEJOR RANKEADAS"} data={topRatedMovies}/>}
        {upcominError ? <SwiperError/> : upcominIsLoading ? <SwiperSkeleton/> : <SwiperContainer title={"PROXIMAMENTE"} data={upcomingMovies}/>}
        {populatTvError ? <SwiperError/> : populatTvIsLoading ? <SwiperSkeleton/> : <SwiperContainer title={"SERIES MAS POPULARES"} data={populatTv}/>}
        {topRatedTvsError ? <SwiperError/> : topRatedTvsIsLoading ? <SwiperSkeleton/> : <SwiperContainer title={"SERIES MEJOR RANKEADAS"} data={topRatedTvs}/>}
        {airingTodaygTvError ? <SwiperError/> : airingTodaygTvIsLoading ? <SwiperSkeleton/> : <SwiperContainer title={"AL AIRE HOY"} data={airingTodaygTv}/>}



        <Footer/>

    </div>

  )
}

export default HomeView;