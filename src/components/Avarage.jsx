
import { Component } from "react";
import React, { useState } from 'react';

{/*const Avarage = () =>
const sum =
rating.reduce ((partialSum,a)) =>
partialSum +a,0 );
const avarage +sum/ rating.length;*/}

const Avarage = ({ rating }) => {

    const average = rating.reduce((a, b) => a + b, 0) / rating.length;
    console.log(average);


    return (
        <>

            <div> Rating: {average} </div>
        </>
    );
}



export default Avarage;