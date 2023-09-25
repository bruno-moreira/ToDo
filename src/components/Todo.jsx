import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <
            div className="todo"
            style={{textDecoration: todo.isComplete ? "line-through" : ""}}
        >
            <div className="content">
                <h3>{todo.text}</h3>
                <p className="category">
                    ({todo.category})
                </p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}><p>Completar</p></button>
                <button className="remove" onClick={() => removeTodo(todo.id)}><p>X</p></button>
            </div>
        </div>
    )
}

export default Todo;