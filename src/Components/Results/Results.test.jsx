import Results from '.';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';


test('result test', () => {

  let data = {
    count: 2,
    results: [
      {name: 'fake thing 1a', url: 'http://fakethings.com/1'},
      {name: 'fake thing 2d', url: 'http://fakethings.com/2'},
    ],
  }
  render(
    <Results data={data} />
  );
  let resultsEl = screen.getByTestId('results');
  expect(resultsEl).toBeVisible();

});