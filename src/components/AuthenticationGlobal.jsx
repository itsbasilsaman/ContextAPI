import React, { useState } from 'react'
import Login from './Login'
import UserShow from './UserShow'
import { AuthenticationContext } from '../contexts/Context'

function AuthenticationGlobal() {

  const [userName,setUserName] = useState('')
  const [show,setShow] = useState(false)
  return (
    <> 
     <AuthenticationContext.Provider value={{setUserName,setShow,userName}}>
      {show ? <UserShow/> :  <Login/>}
        
        
     </AuthenticationContext.Provider>
    </>
  )
}

export default AuthenticationGlobal