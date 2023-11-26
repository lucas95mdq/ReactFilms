import React from 'react'

const BannerButton = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default BannerButton