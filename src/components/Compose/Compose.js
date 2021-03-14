import React from 'react'

const Compose = () => {

    const myevalfunc = (a, c) => {
        return c(a);
    }

    const mycomposefunc = (...args) => {
        const func = (ip) => {
            return args.reduce(myevalfunc, ip);
        }
        return func;
    }

    const increment = num => num + 1;
    const square = num => num * num;
    // console.log(mycomposefunc(increment, square))
    return (
        <div>
            <button onClick={() => console.log(mycomposefunc(increment, square)(5))}>Compose All</button>
        </div>
    )
}

export default Compose;