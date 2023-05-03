import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { login as mockLogin } from '../api';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../api');

describe('Login component', () => {
    beforeEach(() => {
        localStorage.clear();
      });
  it('should render the login form', () => {
    render(<Router><Login /></Router>);
    expect(screen.getByLabelText('Käyttäjätunnus:')).toBeInTheDocument();
    expect(screen.getByLabelText('Salasana:')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should login with correct credentials', async () => {
    const onLogin = jest.fn();
    mockLogin.mockResolvedValueOnce('token123');
    render(<Router><Login onLogin={onLogin} /></Router>);
    const usernameInput = screen.getByLabelText(/käyttäjätunnus/i);
    const passwordInput = screen.getByLabelText(/salasana/i);
    const submitButton = screen.getByRole('button', { name: /kirjaudu sisään/i });
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    userEvent.type(usernameInput, 'testi');
    userEvent.type(passwordInput, 'testi');
    userEvent.click(submitButton);
  
    await waitFor(() => expect(mockLogin).toHaveBeenCalledWith('testi', 'testi'));
    expect(localStorage.getItem('token')).toBe('token123');
    expect(alertSpy).toHaveBeenCalledWith('Kirjautuminen onnistui!');
    expect(onLogin).toHaveBeenCalledWith('token123');
  });

  it('should show error with incorrect credentials', async () => {
    mockLogin.mockRejectedValueOnce(new Error('Incorrect credentials'));

    render(<Router><Login onLogin={jest.fn()} /></Router>);
    const usernameInput = screen.getByLabelText('Käyttäjätunnus:');
    const passwordInput = screen.getByLabelText('Salasana:');
    const submitButton = screen.getByRole('button');
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    userEvent.type(usernameInput, 'wrongUsername');
    userEvent.type(passwordInput, 'wrongPassword');
    userEvent.click(submitButton);

    await waitFor(() => expect(mockLogin).toHaveBeenCalledWith('wrongUsername', 'wrongPassword'));
    expect(localStorage.getItem('token')).toBe(null);
    expect(alertSpy).toHaveBeenCalledWith('Kirjautuminen epäonnistui.');
  });
});