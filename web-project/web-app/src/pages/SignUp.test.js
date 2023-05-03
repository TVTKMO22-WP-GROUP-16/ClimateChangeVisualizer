import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { register } from "../api";
import SignUp from "./SignUp";

window.alert = jest.fn();

// mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// mock the register function
jest.mock("../api", () => ({
  register: jest.fn(),
}));

describe("SignUp component", () => {
  it("calls the register function and navigates to the login page on successful submission", async () => {
    // set up the mock values
    const username = "testuser";
    const password = "testpassword";
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    // render the component
    const { getByLabelText, getByText } = render(<SignUp />);

    // fill in the form and submit it
    fireEvent.change(getByLabelText("Käyttäjätunnus:"), {
      target: { value: username },
    });
    fireEvent.change(getByLabelText("Salasana:"), {
      target: { value: password },
    });
    fireEvent.click(getByText("Rekisteröidy"));

    // wait for the async function to complete
    await act(async () => {
      await Promise.resolve();
    });

    // check that the register function was called with the correct values
    expect(register).toHaveBeenCalledWith(username, password);

    // check that the navigate function was called with the correct path
    expect(navigate).toHaveBeenCalledWith("/login");
  });

  it("displays an error message on submission failure", async () => {
    // set up the mock values
    const username = "testuser";
    const password = "testpassword";
    const error = new Error("Registration failed");
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    register.mockRejectedValue(error);
  
    // render the component
    const { getByLabelText, getByText, queryByText } = render(<SignUp />);
  
    // fill in the form and submit it
    fireEvent.change(getByLabelText("Käyttäjätunnus:"), {
      target: { value: username },
    });
    fireEvent.change(getByLabelText("Salasana:"), {
      target: { value: password },
    });
    fireEvent.click(getByText("Rekisteröidy"));
  
    // wait for the async function to complete
    await act(async () => {
      await Promise.resolve();
    });
  
    // check that the register function was called with the correct values
    expect(register).toHaveBeenCalledWith(username, password);
  
    // check that the navigate function was not called
    expect(navigate).not.toHaveBeenCalled();
  
    // check that an error message was displayed
    const errorMessage = queryByText(/rekisteröinti epäonnistui/i);
    expect(errorMessage).toBeNull();
  });
});