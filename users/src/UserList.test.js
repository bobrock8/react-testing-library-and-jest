import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
    // Render component
    const users = [
        {name: 'Aca', email: 'aca@aca.com'},
        {name: 'Djole', email: 'djole@djole.com'}
    ];
    render(<UserList users={users}/>);

    return {users};
}

test('render one row per user', () => {

    // Render component
    renderComponent();

    // Find all the rows in the table
    // To help findinf all particular elements, use the helper func
    // screen.logTestingPlaygroundURL()
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // Asserion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});


test('second approach - render one row per user', () => {
    // Render component
    const users = [
        {name: 'Aca', email: 'aca@aca.com'},
        {name: 'Djole', email: 'djole@djole.com'}
    ];
    const { container } = render(<UserList users={users}/>);

    // Find all the rows in the table
    // To help findinf all particular elements, use the helper func
    // screen.logTestingPlaygroundURL()
    // eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');

    // Asserion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});


test('render email and name of each user', () => {
    // Render component
    const {users} = renderComponent();
    
    for (let user of users) {
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }


});