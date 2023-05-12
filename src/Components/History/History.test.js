import History from '.';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

test('form test input', () => {
  const history = [
    {some: 'sdfsdfsdfds'},
    { date: 'tomslau.com'}
  ]
  const findResult = jest.fn();

  render(
    <History history={history} findResult={findResult} />
  );

  let historyEl = screen.getByTestId('history');
  expect(historyEl).toBeVisible();
});