import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../api', () => ({
  register: jest.fn(),
}));

describe('SignUp', () => {
  beforeEach(() => {
    useNavigate.mockReturnValue(jest.fn());
  });

  it('should render a form with two input fields and a button', () => {
    const { getByLabelText, getByText } = render(<SignUp />);
    const usernameInput = getByLabelText('Käyttäjätunnus:');
    const passwordInput = getByLabelText('Salasana:');
    const submitButton = getByText('Rekisteröidy');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should call register API with username and password on form submission', async () => {
    const { getByLabelText, getByText } = render(<SignUp />);
    const usernameInput = getByLabelText('Käyttäjätunnus:');
    const passwordInput = getByLabelText('Salasana:');
    const submitButton = getByText('Rekisteröidy');
    const username = 'testuser';
    const password = 'testpassword';
    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);
    expect(register).toHaveBeenCalledWith(username, password);
    await waitFor(() => expect(useNavigate).toHaveBeenCalledWith('/login'));
  });

  it('should show an error message if register API call fails', async () => {
    register.mockRejectedValue(new Error('Failed to register user'));
    const { getByLabelText, getByText } = render(<SignUp />);
    const usernameInput = getByLabelText('Käyttäjätunnus:');
    const passwordInput = getByLabelText('Salasana:');
    const submitButton = getByText('Rekisteröidy');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);
    await waitFor(() =>
      expect(getByText('Rekisteröinti epäonnistui.')).toBeInTheDocument()
    );
  });
});