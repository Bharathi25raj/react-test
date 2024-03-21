import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test('check for user name input', () => {
    render(<Login />)
    const usernameInputElem = screen.getByPlaceholderText('username');

    expect(usernameInputElem).toBeInTheDocument();
})


test('check for password input', () => {
    render(<Login />)
    const pwdElem = screen.getByPlaceholderText('password');

    expect(pwdElem).toBeInTheDocument();
})


test('check for submit button', () => {
    render(<Login />)
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument(); 
})

test('check if the username input is empty at the start', () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText('username');
    
    expect(usernameInput).toHaveValue("");
    
})


test('check if the password input is empty at the start', () => {
    render(<Login/>)
    const passwordInput = screen.getByPlaceholderText('password');
    expect(passwordInput.value).toBe("");
})


test('check for correct data received for username', () => {
    render(<Login/>)
    const usernameInput = screen.getByPlaceholderText('username');
    fireEvent.change(usernameInput, {target: {value: 'Hello World!'}});
    expect(usernameInput.value).toBe('Hello World!')
})


test('check for correct data received for password', () => {
    render(<Login/>)
    const passwordInput = screen.getByPlaceholderText('password')
    fireEvent.change(passwordInput, {target: {value: 'password'}})
    expect(passwordInput).toHaveValue('password');
})


test('check if the submit btn is disabled', () => {
    render(<Login/>)
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeDisabled();
})

test('check if the submit btn is enabled when username and pwd field is updated', () => {
    render(<Login/>)
    const usernameInput = screen.getByPlaceholderText('username');
    const passwordInput = screen.getByPlaceholderText('password');
    fireEvent.change(usernameInput, {target: {value: 'hello'}});
    fireEvent.change(passwordInput, {target: {value: 'password'}});
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeEnabled();
})


