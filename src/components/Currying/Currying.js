import React from 'react'

const Currying = () => {
    const takemyname = (name) => {
        const secondfunction = () => console.log('Glad to see you ' + name)
        return secondfunction
    }

    return (
        <div>
            <button onClick={() => takemyname("Payal")()}>Currying</button>
        </div>
    )
}

export default Currying;