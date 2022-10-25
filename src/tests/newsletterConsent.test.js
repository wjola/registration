import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsletterConsent from '../components/NewsletterConsent';

const testFunction = jest.fn();

test('It should render NewsletterConsent with checked checkbox', () => {
  render(<NewsletterConsent isChecked={true} onChange={testFunction}  />);
  const checkbox = screen.getByRole('checkbox', { name: 'Zgoda na newsletter'});
  expect(checkbox).toBeChecked();
});

test('It should fire onChange function on checking checkbox', async () => {
  render(<NewsletterConsent isChecked={false} onChange={testFunction}  />);
  const checkbox = screen.getByRole('checkbox', { name: 'Zgoda na newsletter'});
  expect(checkbox).not.toBeChecked();

  userEvent.click(checkbox);
  expect(testFunction).toHaveBeenCalledTimes(1);
});