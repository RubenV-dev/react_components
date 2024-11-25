import React from 'react'

const FormBox = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const query = formData.get("query")
        alert(`You searched me for '${query}'`)
    }
    return (
        //action prop used when specifying a url path directly, expects a string and not a custom js handler, for that we use onSubmit
        <form onSubmit={handleSubmit}>
            <input name="query" />
            <button type="submit">Search</button>
        </form>
    );
}

export default FormBox