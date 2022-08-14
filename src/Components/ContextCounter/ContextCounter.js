import React, { useState } from 'react'
import Counter from './Counter'
import {CounterContext} from './CounterContext'




const ContextCounter = () => {

    const counterState = useState(0);
    return (
        <CounterContext.Provider value={counterState} >
            <Counter />
        </CounterContext.Provider>
    )
}

export default ContextCounter