
import { Component } from "react";
import React, { useState } from 'react';

{/*const Avarage = () =>
const sum =
rating.reduce ((partialSum,a)) =>
partialSum +a,0 );
const avarage +sum/ rating.length;*/}
const Avarage = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState = prevState + 1)
        console.log(count);
    }
    return (
        <>
            <button onClick={increment}>+</button>
            <div> Result: {count} </div>
        </>
    );
}



export default Avarage;