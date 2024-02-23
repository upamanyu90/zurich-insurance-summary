import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Content from './Content';
import configureStore from 'redux-mock-store';


// Mock the CSS file
jest.mock('../../styles/Login.modules.css', () => ({}));

const mockStore = configureStore([]);

describe('Content component', () => {
  it('fetches and displays users when session is active', async () => {
    const activeSessionState = { loginReducer: { sessionActive: true } };
    const activeSessionStore = mockStore(activeSessionState);

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ data: [{ id: 1, first_name: 'John', last_name: 'Doe' }] }),
    });

    render(
      <Provider store={activeSessionStore}>
        <Content />
      </Provider>
    );

    // Wait for the content to be rendered
    await waitFor(() => {
      // Check if elements with the specified class names are present
      expect(screen.getByTestId('first-name')).toBeInTheDocument()
      expect(screen.getByTestId('last-name')).toBeInTheDocument();
      expect(screen.getByTestId('email')).toBeInTheDocument();
    });
  });
});
