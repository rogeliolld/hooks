import React from 'react'
import { mount, configure } from "enzyme"
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});

describe('Pruebas en <AppRouter/>', () => {

    const user = {
        id: 1,
        name: 'Rogelio'
    }
    const wrapper = mount(

        <UserContext.Provider value={{
            user
        }}>
            <AppRouter/>
        </UserContext.Provider>
    );
    
    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })
    
})
