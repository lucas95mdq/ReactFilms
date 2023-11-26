import React from 'react'
import Sercher from '../sercher/Sercher'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../button/AppButton'

const Header = () => {

  const {isLoggedIn, logout} = useAuth()

  return (
    <div>Header
      {isLoggedIn ?  
      <div>
        <Sercher/>
        <AppButton onClick={logout}>Salir</AppButton>
      </div>: null}

    </div>
  )
}

export default Header