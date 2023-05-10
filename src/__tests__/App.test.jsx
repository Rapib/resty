import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('App test', () => {
  test('display the whole site', () => {
    render(
      <App />
    );

    let urlEl = screen.getByTestId('url-input');
    expect(urlEl).toBeVisible();
    fireEvent.change(urlEl, { target: { value: 'https://randomfox.ca/floof/' } });
    let methodsEl = screen.getByTestId('HTMLmethods');
    expect(methodsEl).toBeVisible();
    fireEvent.change(methodsEl, { target: { value: 'get' } });
    fireEvent.click(screen.getByText('GO!'));
    expect(screen.getByText('Loading...')).toBeVisible();
  });

  test('loads and displays greeting', async () => {
    render(
      <App />
    );
    let urlEl = screen.getByTestId('url-input');
    expect(urlEl).toBeVisible();
    fireEvent.change(urlEl, { target: { value: 'https://randomfox.ca/floof/' } });
    let methodsEl = screen.getByTestId('HTMLmethods');
    expect(methodsEl).toBeVisible();
    fireEvent.change(methodsEl, { target: { value: 'get' } });
    await fireEvent.click(screen.getByText('GO!'));
    let resultsEl =  screen.getByTestId('results');
    expect(resultsEl).toBeVisible();



  });
})