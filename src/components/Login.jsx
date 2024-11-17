import React, { useContext } from 'react'
import { AuthenticationContext } from '../contexts/Context'

function Login() {


  const {setUserName,setShow} = useContext(AuthenticationContext)

  return (
    <div>
      
      <div>
      <div>  <input type="text" placeholder='USERNAME' onChange={(e)=> setUserName(e.target.value)}/></div>
       <div> <input type="text" placeholder='PASSWORD'/></div>
        <button onClick={()=>setShow(true)}>LOGIN</button>
      </div>

    </div>
  )
}

export default Login