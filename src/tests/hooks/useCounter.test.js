import { useCounter } from "../../hooks/useCounter"
import { act, renderHook } from '@testing-library/react-hooks';
describe('Pruebas en useCounter', () => {
    test('debe de retonar valores por defecto', () => {
        const { result } = renderHook ( () => useCounter(10));

        expect ( result.current.counter).toBe(10);
        expect ( typeof result.current.increment).toBe('function');
        expect ( typeof result.current.decrement).toBe('function');
        expect ( typeof result.current.reset).toBe('function');
    });


    test('debe de incrementar el counter en 1', () => {
        const { result } = renderHook ( () => useCounter(100));
        const { increment } = result.current;

        act( ()=>{
            increment();
        });

        const { counter } = result.current;
        expect ( counter ).toBe(101)
    });

    test('debe de decrementar el counter en 1', () => {
        const { result } = renderHook ( () => useCounter(100));
        const { decrement } = result.current;

        act( ()=>{
            decrement();
        });

        const { counter } = result.current;
        expect ( counter ).toBe(99)
    });


    test('debe de resetear  el counter en 100', () => {
        const { result } = renderHook ( () => useCounter(100));
        const { increment, reset } = result.current;

        act( ()=>{
            increment();
            reset();
        });

        const { counter } = result.current;
        expect ( counter ).toBe(100)
    });
    
})
