import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
// }];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return[{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }];
}

export const TodoApp = () => {

   const [todos, dispatch] = useReducer(todoReducer, [], init);

    console.log(todos);

    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    //Eliminar una tarea
    const handleDelete = (todoId) =>{

        //crear la accion
        const action = {
            type: 'delete',
            payload: todoId
        }
        // dispatch
        dispatch( action );
    }


    //Completar una tarea
    const handleToggle = (todoId) =>{
        dispatch(
            {
                type: 'toggle',
                payload: todoId
            }
        )
    }

    //Agregar una tarea
    const handleAddTodo = ( newTodo ) =>{

        dispatch( {
            type: 'add',
            payload: newTodo
        } );
    }

   
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={todos}
                    handleDelete = { handleDelete }
                    handleToggle = { handleToggle }
                    />
                </div>

                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>

            </div>
        </div>
    )
}
