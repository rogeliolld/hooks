import { mount, configure } from 'enzyme';
import React from 'react'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { UserContext } from '../../../components/09-useContext/UserContext';

configure({adapter: new Adapter()});

describe('Pruebas <LoginScreen/>', () => {

    const setUser = jest.fn();

    const wrapper = mount(
     <UserContext.Provider value={{
            setUser
        }}>
        <LoginScreen/>
     </UserContext.Provider>
    
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe ejecutarse el setUser con el argumento esperado', () => {
        
            wrapper.find('button').prop('onClick')();
            expect(setUser).toHaveBeenCalledWith({
                id:1234,
                name: 'Rogelio'
            })

    })
    
    
    
})
