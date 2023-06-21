import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';


const renderComponent = async() => {
    render(
        <MemoryRouter>
            <AuthButtons />
        </MemoryRouter>
    );
    return await screen.findAllByRole('link');
};

// createServer() --> GET '/api/user' --> { user: null }

describe('when user is not sign in', () => {
    createServer([
        {
            path: '/api/user',
            res: () => {
                return { user: null };
            }
        }
    ]);
    
    test('sign in and sign up are visible', async() => {
        
        await renderComponent();
        const signInButton = screen.getByRole('link', {
            name: /sign in/i
        });
        const signUpButton = screen.getByRole('link', {
            name: /sign up/i
        });

        expect(signInButton).toBeInTheDocument();
        expect(signInButton).toHaveAttribute('href', '/signin');

        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveAttribute('href', '/signup');
    });

    test('sign out is not visible', async() => {
        await renderComponent();
        const signOutButton = screen.queryByRole('link', {
            name: /sign out/i
        });
        
        expect(signOutButton).not.toBeInTheDocument();
        expect(signOutButton).toBeNull();
    });
});

describe('when user is sign in', () => {
    // createServer() --> GET '/api/user' --> { user: { id: 3, email: 'ac@Wsad.com' } }
    createServer([
        {
            path: '/api/user',
            res: () => {
                return { user: 3, email: 'aca@react.com' };
            }
        }
    ]);

    test('sign in and sign up are not visible', async() => {
        await renderComponent();
    });

    test('sign out is visible', async() => {
        await renderComponent();
    });
});

