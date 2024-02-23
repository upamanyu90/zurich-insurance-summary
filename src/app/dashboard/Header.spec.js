import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

// Mock the CSS file
jest.mock('../../styles/Login.modules.css', () => ({}));

describe('Header component', () => {
  it('renders with user information', () => {
    const emailId = 'test@example.com';
    const name = 'John Doe';
    const { getByText } = render(<Header emailId={emailId} name={name} />);

    expect(getByText('Zurich Insurance Customer Portal')).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(emailId)).toBeInTheDocument();
  });

  it('calls logOut function when sign out button is clicked', () => {
    const mockLogOut = jest.fn();
    const { getByText } = render(<Header emailId="test@example.com" name="John Doe" logOut={mockLogOut} />);

    fireEvent.click(getByText('Sign Out'));

    expect(mockLogOut).toHaveBeenCalledTimes(1);
  });
});
