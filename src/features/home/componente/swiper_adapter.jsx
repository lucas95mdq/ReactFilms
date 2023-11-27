import React from 'react'
import SwiperError from '../../Components/appSwiper/swiper_error'
import SwiperSkeleton from '../../Components/appSwiper/swiper_skeleton'
import SwiperContainer from '../../Components/appSwiper/swiper_container'

const SwiperAdapter = (error, isLoading, title, data) => {
  return (
    <div>
        {
            error ? 
            <SwiperError/> : 
            isLoading ?
             <SwiperSkeleton/> : 
             <SwiperContainer title={title} data={data}/>
        }
    </div>
  )
}

export default SwiperAdapter