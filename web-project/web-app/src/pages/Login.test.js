import { render, fireEvent, waitFor } from '@testing-library/react';
import { login } from '../api';
import Login from './Login';

jest.mock('../api');

test('renders login form', () => {
  const { getByLabelText, getByTestId } = render(<Login />);
  const usernameInput = getByLabelText('Käyttäjätunnus:');
  const passwordInput = getByLabelText('Salasana:');
  const loginButton = getByTestId('login-button');

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test('handles login form submission', async () => {
  const mockToken = 'mockToken';
  const onLoginMock = jest.fn();
  login.mockResolvedValue(mockToken);

  const { getByLabelText, getByTestId } = render(<Login onLogin={onLoginMock} />);
  const usernameInput = getByLabelText('Käyttäjätunnus:');
  const passwordInput = getByLabelText('Salasana:');
  const loginButton = getByTestId('login-button');

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  fireEvent.click(loginButton);

  await waitFor(() => expect(login).toHaveBeenCalledTimes(1));
  expect(login).toHaveBeenCalledWith('testuser', 'testpassword');
  expect(localStorage.getItem('token')).toBe(mockToken);
  expect(onLoginMock).toHaveBeenCalledWith(mockToken);
});