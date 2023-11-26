import React from 'react'
import SwiperTitle from './swipper_title'
import { AppSwiper } from './app_Swiper'
import AppSwiperSlide from './app_swiper_slide'
import SwiperCard from './swiper_card'
import { useNavigate } from 'react-router-dom'

const SwiperContainer = ({title, data}) => {

  const navigate = useNavigate()

  return (
    <div>
        <SwiperTitle>{title}</SwiperTitle>
        <AppSwiper>          
          {data?.map((e, index) => (
            <AppSwiperSlide key={index} >
              <div style={{
                height: "150px",
                width: "250px",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
            onClick={()=>{navigate(`/${e.id}`)}}>
                <SwiperCard title={e.title}  >
                </SwiperCard>
              </div>

            </AppSwiperSlide>
          ))}</AppSwiper>
    </div>
  )
}

export default SwiperContainer