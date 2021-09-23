import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name:'Rogelio',
        email: 'rogelio.@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        const {result} = renderHook( () =>useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
        
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook( () =>useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Abad'
                }
            });
        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual({...initialForm, name:'Abad'});
    });

    test('debe de re-establecer el formulario con RESET', () => {

        const {result} = renderHook( () =>useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Abad'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual(initialForm);
        
    });
    
})
