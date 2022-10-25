import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from '../components/RegistrationForm';

test('It should render RegistrationForm initial state correctly', () => {
  render(<RegistrationForm />);
  const nameInput = screen.getByRole('textbox', { name: 'Imie' });
  const passwordInput = screen.getByLabelText('Haslo');
  const emailInput = screen.queryByRole('textbox', { name: 'Email ' });
  const checkbox = screen.getByRole('checkbox', { name: 'Zgoda na newsletter' });
  const button = screen.getByRole('button');
  const paragraph = screen.queryByTestId('formInfo');
  
  expect(nameInput).toHaveValue('');
  expect(passwordInput).toHaveValue('');
  expect(emailInput).not.toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
  expect(button).toBeInTheDocument();
  expect(paragraph).not.toBeInTheDocument();
});

test('It should render empty email input after checking checbox', () => {
  render(<RegistrationForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'Zgoda na newsletter' });
  
  userEvent.click(checkbox);
  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveValue('');
});

test('It should render validation error of basic fields properly', () => {
  render(<RegistrationForm />);
  const nameInput = screen.getByRole('textbox', { name: 'Imie' });
  const passwordInput = screen.getByLabelText('Haslo');
  const button = screen.getByRole('button');

  userEvent.click(button);
  const errorParagraph = screen.getByText('Błąd walidacji');
  expect(errorParagraph).toBeInTheDocument();

  userEvent.type(nameInput, 'Abc');
  userEvent.type(passwordInput, '123');
  userEvent.click(button);
  const successParagraph = screen.getByText('Pomyślna rejestracja');
  expect(successParagraph).toBeInTheDocument();
});

test('It should render validation error of email properly', () => {
  render(<RegistrationForm />);
  const nameInput = screen.getByRole('textbox', { name: 'Imie' });
  const passwordInput = screen.getByLabelText('Haslo');
  const checkbox = screen.getByRole('checkbox', { name: 'Zgoda na newsletter' });
  const button = screen.getByRole('button');

  userEvent.type(nameInput, 'Abc');
  userEvent.type(passwordInput, '123');
  userEvent.click(checkbox);

  userEvent.click(button);
  const errorParagraph = screen.getByText('Błąd walidacji');
  expect(errorParagraph).toBeInTheDocument();

  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  userEvent.type(emailInput, '123');
  userEvent.click(button);
  expect(errorParagraph).toBeInTheDocument();

  userEvent.clear(emailInput);
  userEvent.type(emailInput, '123@');
  userEvent.click(button);
  expect(errorParagraph).toBeInTheDocument();

  userEvent.clear(emailInput);
  userEvent.type(emailInput, '1@23@.');
  userEvent.click(button);
  expect(errorParagraph).toBeInTheDocument();
});

test('It should render success message on form submit and clear form', () => {
  render(<RegistrationForm />);
  const nameInput = screen.getByRole('textbox', { name: 'Imie' });
  const passwordInput = screen.getByLabelText('Haslo');
  const checkbox = screen.getByRole('checkbox', { name: 'Zgoda na newsletter' });
  const button = screen.getByRole('button');

  userEvent.type(nameInput, 'Abc');
  userEvent.type(passwordInput, '123');
  userEvent.click(checkbox);

  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  userEvent.type(emailInput, '123@a.b');
  userEvent.click(button);
  const successParagraph = screen.getByText('Pomyślna rejestracja');
  expect(successParagraph).toBeInTheDocument();

  expect(nameInput).toHaveValue('');
  expect(passwordInput).toHaveValue('');
  expect(checkbox).not.toBeChecked();
  const missingEmailInput = screen.queryByRole('textbox', { name: 'Email ' });
  expect(missingEmailInput).not.toBeInTheDocument();
});