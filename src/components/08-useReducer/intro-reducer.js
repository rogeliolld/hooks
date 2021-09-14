const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) =>{

    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();


const newTodo = {
    id:2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar', //le dice a reducer, que accion debe realizar
    payload: newTodo //estandar para trabajar con los argumentos que le mandamos a la accion **opcional
}

//Mandamos los todos del estado anterior, mas la accion que este caso seria 'agregar'
todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
