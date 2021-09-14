import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter Width Hook: {state}</h1>
            <button onClick={()=>increment(3)} className="btn">+1</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={()=>decrement(5)} className="btn">-1</button>
        </>
    )
}
