import React, { useState } from 'react';

function Filter(){
    //We use state here to autofill some dummy data.
    const [items] = useState([
        { id: 1, name: "Apple", category: "Fruit"},
        { id: 2, name: "Banana", category: "Fruit"},
        { id: 3, name: "Carrot", category: "Vegetable"},
        { id: 4, name: "Broccoli", category: "Vegetable"}
    ]);

    //filter holds the different categories we can filter data by
    const [filter, setFilter] = useState('All');

    const filteredItems = items.filter((item) => {
        if(filter === 'All') return true;
        return item.category === filter
    })
    
    //Because we render the parts of the unordered list using filteredItems if there is a rerender our ul will adjust accordingly.
    //The state we are actually changing is that of the filter variable, when a button is clicked we can change across
    return (
        <div>
            <div>
                <div>
                    <button onClick={() => setFilter('All')}>All</button>
                    <button onClick={() => setFilter('Fruit')}>Fruit</button>
                    <button onClick={() => setFilter('Vegetable')}>Vegetable</button>
                </div>
                <ul>
                    {filteredItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filter