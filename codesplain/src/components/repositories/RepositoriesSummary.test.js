import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('display the language of the repository', ()=> {

    const repository = {
        stargazers_count: 4,
        open_issues: 2, 
        forks: 140,
        language: "PHP"
    };

    render (<RepositoriesSummary repository={repository} />);
    
    const language = screen.getByText('PHP');

    expect(language).toBeInTheDocument();

});