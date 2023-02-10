import React from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {

    const [user, setUser] = React.useState({
        nombre: '',
        email: '',
        token: ''
    })
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
