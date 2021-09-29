import React from 'react';
import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        //Le pasamos por parametros todos lo que requiere el componente 'TodoListItem'
        <TodoListItem 
            todo={demoTodos[0]} //Mandamos el primer elemento que encontremos del array de 'demoTodos'
            index={0} //Mandamos indexe '0' 
            handleDelete={handleDelete} // Mandamos la simulacion de una funcion con Jest
            handleToggle={handleToggle}
        />

    );
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {

        //Realizamos la simulacion de darle click el boton de eliminar, para ese caso como solo usamos 1 solo boton lo mandamos tal cual
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id); //Hacemos referencia al id del primer elemento del array
    });

    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');//Realizamos la simulacion de darle click el elemento 'P' ya que se definio de esta forma 'Click cambia el done del elemento'
        expect(handleToggle).toHaveBeenCalledWith( demoTodos[0].id); //Hacemos referencia al id del primer elemento del array
    });

    test('debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);//Buscamos del parrafo que contenga la estructura deseada
    });
    

    test('debe tener la clase complete si el TODO.done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem 
                todo={demoTodos[0]}
            />
    
        );
        expect(wrapper.find('p').hasClass('complete')).toBe(true);//Buscamos que el elemento 'P' tenga la class 'Complete'

    });
    
    
    
})
