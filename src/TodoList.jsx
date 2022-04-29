import React from "react";

const TodoList=(props)=>{
    return (
    <>
        <div className="todo_style"> 
            <i className="fa fa-times fa-sm" aria-hidden='true' onClick={()=>{
                props.onSelect(props.id)
            }}></i>
            <li> {props.item} </li>
        </div>
    </>
    );
}

export default TodoList;