import React from 'react'
import SwiperTitle from './swipper_title'
import { AppSwiper } from './app_Swiper'

const SwiperContainer = ({title, children}) => {
  return (
    <div>
        <SwiperTitle>{title}</SwiperTitle>
        <AppSwiper>{children}</AppSwiper>
    </div>
  )
}

export default SwiperContainer