import React, { useState } from 'react'
import getData from './getdata'

const  ShowData = () => {
    let [state, setState] = useState("")

    const handleClick = () => {
        getData().then(obj => {
            setState(state = obj.fact)
        })
    }

    return (
        <div>
            <button onClick={() => {handleClick()}}>Generate Cat Fact</button>
            <p>{state}</p>
        </div>
    )
}

export default ShowData