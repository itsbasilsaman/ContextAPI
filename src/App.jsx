 
import './App.css'
import AuthenticationGlobal from './components/AuthenticationGlobal'
import CounterButton from './components/CounterButton'
import CounterResult from './components/CounterResult'
import { CounterContext } from './contexts/Context'
import { useState } from 'react'
function App() {
  
  const [count,setCount] = useState(0)

  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)

  return (
    <>
    <CounterContext.Provider value={{count,increment,decrement}}>
       <CounterButton/>
       <CounterResult/>
    </CounterContext.Provider>

    <div>
      <AuthenticationGlobal/>
    </div>
    </>
  )
}

export default App
