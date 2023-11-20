import React from 'react'
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import Sercher from '../../Components/sercher/Sercher';
import List from '../../Components/list/List';
import { AppSwiper } from '../../Components/appSwiper/app_Swiper';
import AppSwiperSlide from '../../Components/appSwiper/app_swiper_slide';
import SwiperContainer from '../../Components/appSwiper/swiper_container';
import SwiperCard from '../../Components/appSwiper/swiper_card';

const HomeView = () => {
  return (
    <div>
        <Sercher/>
        <SwiperContainer title={"MAS VISTAS"}>
          <AppSwiperSlide>
            <SwiperCard image={} title={} key={}/>
          </AppSwiperSlide>

        </SwiperContainer>
        <List/>
        <Footer/>

    </div>

  )
}

export default HomeView;