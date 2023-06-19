import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RepositoriesListItem from './RepositoriesListItem';

// This is the second way to fix 'act' warning regarding FileIcon

jest.mock('../tree/FileIcon', ()=> {
    return () => {
        return 'File Icon Component'
    };
});

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
    // This is the first way (the best one) to fix 'act' warning regarding FileIcon
    // await screen.findByRole('img', { name: 'Javascript' });
});

const pause = () => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve();
        }, 1000);
    })
}