import React, { useContext } from 'react'
import { CounterContext } from '../contexts/Context'

function CounterResult() {

  const {count} = useContext(CounterContext)

  return (
    <div> 

      <h2>Count is : {count}</h2>

    </div>
  )
}

export default CounterResult