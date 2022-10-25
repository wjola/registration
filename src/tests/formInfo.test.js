import { render, screen } from '@testing-library/react';
import FormInfo from '../components/FormInfo';

test('It should render FormInfo correctly', () => {
  const testMessage = "test";
  render(<FormInfo message={testMessage} />);
  const paragraph = screen.getByText(testMessage);
  expect(paragraph).toBeInTheDocument();
});