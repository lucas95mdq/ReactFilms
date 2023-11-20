import React from 'react'

const SwiperCard = ({title, image, }) => {
  return (
    <div>
        <img src={image} alt={title}></img>
    </div>
  )
}

export default SwiperCard