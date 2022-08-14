import React,{useContext} from 'react'
import {CounterContext} from './CounterContext'

const Counter = () => {
let counter=useContext(CounterContext)


  return (
    <div>
        <h1>Counter By using ContextApi</h1>
        <div>
        <h1>{counter[0]}</h1>
        <button onClick={()=>counter[1](counter[0]+1)}>INCREMENT</button>
        <button disabled={counter[0]<1 ?true:false} onClick={()=>counter[1](counter[0]-1)}>DECREMENT</button>
        <button onClick={()=>counter[1](0)}>CLEAR</button>
        </div>
    </div>
  )
}

export default Counter