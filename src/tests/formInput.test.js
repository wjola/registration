import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInput from '../components/FormInput';

test('It should render FormInput correctly', () => {
  const name = "Imie";
  render(<FormInput type="text" id={name} label={name}/>);
  const input = screen.getByRole('textbox', { name });
  expect(input).toBeInTheDocument();
});

test('It should render correct FormInput text', () => {
  const name = "Imie";
  render(<FormInput type="text" id={name} label={name}/>);
  const input = screen.getByRole('textbox', { name });

  const typedText = "abcabcabc";
  userEvent.type(input, typedText);
  expect(input).toHaveValue(typedText);
});