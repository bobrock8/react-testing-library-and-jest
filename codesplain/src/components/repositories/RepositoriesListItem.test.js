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

    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository} />
        </MemoryRouter>
    
    );

    return { repository };
}

test('show a link to the github page for this repository', async ()=>{
    const { repository } = renderComponent();

    // wait for FileIcon component (there is async process)
    await screen.findByRole('img', { name: 'Javascript' });

    const link = screen.getByRole('link', {
        name: /github repository/i
    });

    expect(link).toHaveAttribute('href', repository.html_url);

});

test('show a fileicon with appropriate icon', async ()=>{
    const { repository } = renderComponent();

    // wait for FileIcon component (there is async process)
    const fileIcon = await screen.findByRole('img', { name: 'Javascript' });

    expect(fileIcon).toHaveClass('js-icon');

});
