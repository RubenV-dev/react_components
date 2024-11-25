import React, { useState } from 'react'

const InputAndDisplay = () => {

    let [state, setState] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        let formData = new FormData(event.target)
        let lettersToAdd = formData.get("letters-to-add").replace(/\s/g, "")
        // alert(`You are adding: ${lettersToAdd}`)
        console.log(`Current State: ${state}`)
        setState(state = state += lettersToAdd)
    }
    return (
        <div>
            <p>Add Letters to display box</p>
            <form onSubmit={handleSubmit}>
                <input name="letters-to-add"></input>
                <button type="submit">Add</button>
            </form>
            <p>Display: {state}</p>
        </div>
    )
}

export default InputAndDisplay