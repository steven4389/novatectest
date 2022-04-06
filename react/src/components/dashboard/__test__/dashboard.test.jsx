import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { DataProvider } from '../../../context/DataContext'

describe('testeando el dashboard', () => {

    beforeEach(() =>{
        render( <Dashboard />, {wrapper:DataProvider});
    });

    test('search', () => {
        // const inputText = screen.getByText(/cucho/i,{exact:false});
        const inputInput = screen.getByRole('textbox',{name:''});

        fireEvent.change(inputInput,{target:{value:'admin@correo.com'}});
        expect(inputText).toHaveTextContent(/admin@correo.com/);
    });
});