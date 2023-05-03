import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from '../pages/SignUp';
import { register as mockRegister } from '../api';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../api');

describe('SignUp component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render the signup form', () => {
    render(<Router><SignUp /></Router>);
    expect(screen.getByLabelText('Käyttäjätunnus:')).toBeInTheDocument();
    expect(screen.getByLabelText('Salasana:')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should register with correct credentials', async () => {
    mockRegister.mockResolvedValueOnce();
    render(<Router><SignUp /></Router>);
    const usernameInput = screen.getByLabelText(/käyttäjätunnus/i);
    const passwordInput = screen.getByLabelText(/salasana/i);
    const submitButton = screen.getByRole('button', { name: /rekisteröidy/i });
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    userEvent.type(usernameInput, 'testi1234');
    userEvent.type(passwordInput, 'testi1234');
    userEvent.click(submitButton);
  
    await waitFor(() => expect(mockRegister).toHaveBeenCalledWith('testi1234', 'testi1234'));
    expect(alertSpy).toHaveBeenCalledWith('Rekisteröinti onnistui!');
  });  

  it('should show error with empty fields', async () => {
    render(<Router><SignUp /></Router>);
    const submitButton = screen.getByRole('button', { name: /rekisteröidy/i });
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    userEvent.click(submitButton);

    await waitFor(() => expect(mockRegister).not.toHaveBeenCalled());
    expect(alertSpy).toHaveBeenCalledWith('Rekisteröinti epäonnistui. Täytä kaikki kentät!');
  });

  it('should show error with incorrect credentials', async () => {
    mockRegister.mockRejectedValueOnce(new Error('Registration failed'));

    render(<Router><SignUp /></Router>);
    const usernameInput = screen.getByLabelText('Käyttäjätunnus:');
    const passwordInput = screen.getByLabelText('Salasana:');
    const submitButton = screen.getByRole('button', { name: /rekisteröidy/i });
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    userEvent.type(usernameInput, 'testuser');
    userEvent.type(passwordInput, 'testpassword');
    userEvent.click(submitButton);

    await waitFor(() => expect(mockRegister).toHaveBeenCalledWith('testuser', 'testpassword'));
    expect(alertSpy).toHaveBeenCalledWith('Rekisteröinti epäonnistui.');
  });
});
