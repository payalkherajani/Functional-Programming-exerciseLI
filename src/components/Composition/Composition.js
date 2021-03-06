import React from 'react'

const Composition = () => {
    const logtext = (name) => name
    const myuserid = (message, id) => console.log(`${message} ${id}`);
    const thirdfunction = () => {
        myuserid(logtext("Payal User id is "), 48);
    }
    return (
        <div>
            <button onClick={() => thirdfunction()}>Composition</button>
        </div>
    )
}

export default Composition;