import { useRef } from 'react';


export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="6"
      navigation="true"
      loop
    >
      {children}
    </swiper-container>
  );
};