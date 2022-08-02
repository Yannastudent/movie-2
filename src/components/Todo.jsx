import React from 'react';


const Todo = ({ todoItem, handleToggle }) => {
    //console.log ('Todo', todoItem);

    const handleClick = (e) => {
        e.preventDefult()
        console.log('handleClick', e.currentTarget.id);
        handleToggle(e.currentTarget.id)

    }

    return (
        <div id={todoItem.id} className={todoItem.complete ? "xxx strike" : "xxx"} onclick={handleClick}>
            {todoItem.task}
        </div>
    );
};

export default Todo;