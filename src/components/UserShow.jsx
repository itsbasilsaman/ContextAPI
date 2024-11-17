import React, { useContext } from 'react'
import { AuthenticationContext } from '../contexts/Context'
 

function UserShow() {

  const {userName} = useContext(AuthenticationContext)

  return (
    <div>
      <h2>Username : {userName}</h2>
    </div>
  )
}

export default UserShow