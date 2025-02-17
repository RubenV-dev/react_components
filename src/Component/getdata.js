import React from 'react'

async function getData() {
    const url = "https://catfact.ninja/fact"
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        return json
    } catch(error){
        console.log(error.message)
    }

}

export default getData
