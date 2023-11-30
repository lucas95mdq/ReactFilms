import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../button/AppButton'

const Header = ({children}) => {

  const {isLoggedIn, logout} = useAuth()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }
    }>
      {isLoggedIn ?  
      <div>
        {children}
        <AppButton onClick={logout}>Salir</AppButton>
      </div>: null}

    </div>
  )
}

export default Header