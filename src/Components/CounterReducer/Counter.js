import { useReducer } from "react"
import React from 'react'
import CounterReducer from "./CounterReducer"

const Counter = () => {
    const [counter,dispatch]=useReducer(CounterReducer,0);

  return (
    <div>
        <h1>Counter By useReducer</h1>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch("INCREMENT")}>INCREMENT</button>
        <button disabled={counter<1 ?true:false} onClick={()=>dispatch("DECREMENT")}>DECREMENT</button>
        <button onClick={()=>dispatch("CLEAR")}>CLEAR</button>
    </div>
  )
}

export default Counter