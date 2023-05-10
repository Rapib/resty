import Form from '.';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('form test', () => {
  test('form test input', () => {

    const callApi = jest.fn();

    render(
      <Form handleApiCall={callApi} />
    );

    let urlEl = screen.getByTestId('url-input');
    expect(urlEl).toBeVisible();
    fireEvent.change(urlEl, {target: { value: 'www.google.com'}});
    let methodsEl = screen.getByTestId('HTMLmethods');
    expect(methodsEl).toBeVisible();
    fireEvent.change(methodsEl, {target: { value: 'get'}});
    fireEvent.click(screen.getByText('GO!'));
    expect(callApi).toHaveBeenCalled();
  });
});