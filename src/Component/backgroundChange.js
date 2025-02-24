import React from 'react';

const BackgroundChange = () => {  
    return (
        <div>
            {createButtons()}
        </div>
    )
}

const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color
}

const createButtons = () => {
    const colorArray = ["green", "red", "blue", "purple", "pink", "black", "brown"]
    let buttonArr = colorArray.map((color) => (
        <button onClick={() => {changeBackgroundColor(color)}}>
                Change color to {color}
        </button>))
    return buttonArr
}

export default BackgroundChange;