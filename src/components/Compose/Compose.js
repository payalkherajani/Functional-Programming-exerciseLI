import React from 'react'

const Compose = () => {

    const myevalfunc = (a, c) => {
        console.log(a, c);
        return c
    }

    const mycomposefunc = (...args) => {
        return args.reduce(myevalfunc, args[0]);
    }

    const increment = num => num + 1;
    const square = num => num * num;

    return (
        <div>
            <button onClick={() => console.log(mycomposefunc(increment, square)(5))}>Compose All</button>
        </div>
    )
}

export default Compose;