import React, { useState } from 'react';

//leave comment button

const RatingForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('Leave your comment');

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
            <input value={userInput} type="text" onChange={handleChange} placeholder="feed back" />
            <button>Submit</button>
        </form>
    );
};

export default RatingForm;
