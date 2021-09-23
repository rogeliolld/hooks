import { shallow } from "enzyme"
import { MultipleCustomHook } from "../../../components/03-Example/MultipleCustomHook"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHook/>', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })

    test('debe mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHook/>);

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Rogelio',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHook/>);
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hola mundo');
        expect( wrapper.find('figcaption').text().trim() ).toBe('Rogelio');
    })
    
    
})
