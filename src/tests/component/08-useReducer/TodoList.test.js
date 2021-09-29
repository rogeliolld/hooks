import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en <TodoList/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos = {demoTodos}
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
    )
    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener dos <TodoList/>', () => {
    
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);// Comprobamos La cantidad de elemento de nuestro array
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));//Seleccionamos un elemento y comprobamos si le estamos mandando como argumento una funcion en este caso 'HandleDelete'

    });
    
})
