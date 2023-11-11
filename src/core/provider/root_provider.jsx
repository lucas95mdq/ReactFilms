import React from 'react'
import AuthProvider from '../auth/provider/auth_provider'
import Loading from '../../features/Components/loading/Loading'


const RootProvier = ({children}) => {
  return (
    <AuthProvider
      fallback={
        <div>
          <Loading/>
        </div>
      }
    >
      {children}
    </AuthProvider>
  )
}

export default RootProvier