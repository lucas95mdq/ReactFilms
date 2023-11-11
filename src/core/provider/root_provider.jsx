import React from 'react'
import AuthProvider from '../auth/provider/auth_provider'


const RootProvier = ({children}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default RootProvier