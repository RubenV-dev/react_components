import React from 'react'
import getData from './getdata'

const ShowData = () => {
    const data = getData()
    console.log(data, typeof(data))
    return (
        <div>
            <p>Showing Get Data</p>
            {/* <p>${data}</p> */}
        </div>
    )
}

export default ShowData