import React from 'react'

const SwiperCard = ({title}, ...props ) => {
  return (
    <div>
        <h3 {...props}>{title}</h3>
    </div>
  )
}

export default SwiperCard