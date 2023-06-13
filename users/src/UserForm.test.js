import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';




test('it shows two inputs and a button', () => {
    // render the component

    render(<UserForm />)

    // manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {
    // // NOT THE BEST IMPLEMENTATION
    // const argList = [];
    // const callback = (...args) => {
    //     argList.push(args);
    // };

    // MOCK - BETTER IMPLEMENTATION
    const mock = jest.fn();

    // try to render component
    render(<UserForm onUserAdd={mock}/>);

    // find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole('textbox');

    // find the two inputs by label (htmlFor)
    const nameInput = screen.getByLabelText(/enter name/i);
    const emailInput = screen.getByLabelText(/please enter email/i);

    // simulate typing name
    user.click(nameInput);
    user.keyboard('Aca');

    // simulate typing email
    user.click(emailInput);
    user.keyboard('aleksandarilic990@gmail.com');

    // find submit
    const submit = screen.getByRole('button');

    // simulate clicking on submit
    user.click(submit)

    // Assert to make sure 'onUserAdd' gets called with name & email
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({ name: 'Aca', email: 'aleksandarilic990@gmail.com' });

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'Aca', email: 'aleksandarilic990@gmail.com' });

    
});