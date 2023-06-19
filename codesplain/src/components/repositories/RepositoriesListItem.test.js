import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RepositoriesListItem from './RepositoriesListItem';


function renderComponent() {
    const repository = {
        full_name: 'facebook/react',
        language: 'Javascript',
        description: 'JS librar',
        owner: 'facebook',
        name: 'react',
        html_url: 'https://github.com/facebook/react'
    }

    return render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository} />
        </MemoryRouter>
    
    );
}

test('show a link to the github page for this repository', async ()=>{
    renderComponent();
    await screen.findByRole('img', { name: 'Javascript' });

});
