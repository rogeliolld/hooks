const { shallow } = require("enzyme")
const { TodoAdd } = require("../../../components/08-useReducer/TodoAdd")


describe('Pruebas en <TodoAdd/>', () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    );


    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('No debe llamar handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} }); // colocamos el PreventDefault 
        
        expect(handleAddTodo).toHaveBeenCalledTimes(0); //Esperemos que nuestras funcion se ha llamada 0 veces
        
    });

    test('debe llamar la función handleAddTodo', () => {
        const value = 'Aprender Mongo';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} }); // colocamos el PreventDefault 

        expect(handleAddTodo).toHaveBeenCalledTimes(1);//Esperemos que nuestras funcion se ha llamada 1 veces
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); //Esperamos que la informacion sea un objeto
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number), //Como el Id, son numeros aleatorios utilizamos el any para indicar que puede ser acualquier numero
            desc: value,
            done: false

        });

        expect(wrapper.find('input').prop('value')).toBe('');//Hacemos el llamado para que se resete al funcion 'RESET' del formulario

    });
    
    
    
    
})
