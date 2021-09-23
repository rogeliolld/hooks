import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Prueba en todoReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });

    test('debe agregar un todo', () => {
        const newTodo=[{
            id:3,
            desc: 'Aprender Mongo',
            done: false
        }];
        const action ={
            type: 'add',
            payload: newTodo
        }
        const state = todoReducer(demoTodos, action); // Mandamos el nuevo todo
        expect(state.length).toBe(3); //Comprobamos que efectivamente se agrego, para este caso se hace con el toBe(3), ya que anteriormente teniamos 2
        expect(state).toEqual([...demoTodos, newTodo]) //con este comprobamos que se agrego nuestro state a demoTodos
    });


    test('debe borrar un todo', () => {
        const action ={
            type: 'delete',
            payload: 1
        }
        const state = todoReducer(demoTodos, action); // Mandamos la accion en este caso eliminar
        expect(state.length).toBe(1); //Comprobamos que efectivamente se elimino, para este caso se hace con el toBe(1), ya que anteriormente teniamos 2
        expect(state).toEqual([demoTodos[1]]); //Comprobamos que nuestro arreglo solo quede el primer elemento
    });


    test('debe hacer el TOOGLE del todo', () => {
        const action ={
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, action); 
        
        expect(state[0].done).toBe(true);// Hacemos el cambio en el 'Done' del TODO seleccionado
        expect(state[1]).toEqual( demoTodos[1] ); //Comprobamos que los elemento tanto 'State' como 'demoTodos', sean iguales
        
    });

    
})
