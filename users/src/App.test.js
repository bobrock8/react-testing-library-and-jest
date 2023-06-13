import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {

  const testName = 'Miskonjica';
  const testEmail = 'kumce@kumce.com';

  render(<App />);

  const nameInput = screen.getByLabelText(/enter name/i);
  const emailInput = screen.getByLabelText(/please enter email/i);
  const submit = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard(testName);

  user.click(emailInput);
  user.keyboard(testEmail);

  user.click(submit);
  // screen.debug();

  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  const tableName = screen.getByRole('cell', {name: testName});
  const tableEmail = screen.getByRole('cell', {name: testEmail});

  expect(rows).toHaveLength(1);
  expect(tableName).toBeInTheDocument();
  expect(tableEmail).toBeInTheDocument();

});
