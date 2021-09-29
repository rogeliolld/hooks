import { mount, configure } from 'enzyme'
import React from 'react'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});

describe('Pruebas en <HomeScreen/>', () => {
   const user = {
       name: 'Rogelio',
       email: 'Rogelio@gmail.com'
   }
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
