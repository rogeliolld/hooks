import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Pruebas con <RealExampleRef/>', () => {
    const wrapper = shallow(<RealExampleRef/>);

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHook').exists()).toBe(false)//Al cargar el Componente por primera vez no debe existir el componente ´MultipleCustomHook´
    });

    test('debe de mostrar el componente <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');//Simulamos el click
        expect(wrapper.find('MultipleCustomHook').exists()).toBe(true)//Al simular que damos clic mostrarmos el componente ´MultipleCustomHook´
    });
    
    
})
