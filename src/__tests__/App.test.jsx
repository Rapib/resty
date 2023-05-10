import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({api: 'hello there'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())



describe('App test', () => {
  test('display the whole site', () => {
    render(
      <App />
    );

    let urlEl = screen.getByTestId('url-input');
    expect(urlEl).toBeVisible();
    fireEvent.change(urlEl, { target: { value: 'www.google.com' } });
    let methodsEl = screen.getByTestId('HTMLmethods');
    expect(methodsEl).toBeVisible();
    fireEvent.change(methodsEl, { target: { value: 'get' } });
    fireEvent.click(screen.getByText('GO!'));
    let resultsEl = screen.getByTestId('results');
    expect(resultsEl).toBeVisible();
  });

  test('loads and displays greeting', async () => {
    render(<App url="/api" />)
  
    fireEvent.click(screen.getByText('Load Greeting'))
  
    await screen.findByRole('heading')
  
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('button')).toBeDisabled()
  });
})