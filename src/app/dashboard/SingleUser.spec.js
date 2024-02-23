import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SingleUser from './SingleUser';

// Mock the CSS file
jest.mock('../../styles/Login.modules.css', () => ({}));

describe('SingleUser component', () => {
  it('renders user information with initial email hidden', () => {
    const { getByText } = render(<SingleUser firstName="John" lastName="Doe" id={1} />);
    
    expect(getByText('First Name: John')).toBeInTheDocument();
    expect(getByText('Last Name: Doe')).toBeInTheDocument();
    expect(getByText('Emails: ******@reqres.in')).toBeInTheDocument(); // Initial email should be hidden
  });

  it('displays email when "Show Email" button is clicked', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve('test@example.com'), // Mock the response from the server
    });

    const { getByText, getByTestId } = render(<SingleUser firstName="John" lastName="Doe" id={1} />);
    
    fireEvent.click(getByText('Show Email'));

    await waitFor(() => {
      expect(getByTestId('email')).toHaveTextContent('Emails: test@example.com');
    });
  });
});
