import React, { useState } from 'react'

const InputAndDisplay = () => {

    let [state, setState] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        let formData = new FormData(event.target)
        let lettersToAdd = formData.get("letters-to-add").replace(/\s/g, "")
        setState(state = state += lettersToAdd)
        
    }
    return (
        <div>
            <form name="add-form" onSubmit={handleSubmit}>
                <input name="letters-to-add"></input>
                <button type="submit">Add</button>
            </form>
            <button onClick={() => {setState("")}}>Reset</button>
            <p>Display: {state}</p>
        </div>
    )
}

export default InputAndDisplay