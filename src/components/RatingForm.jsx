import React, { useState } from 'react';

//Rate button

const RatingForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('Rate');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("Thank you");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="task" />
            <button>Submit</button>
        </form>
    );
};

export default RatingForm;