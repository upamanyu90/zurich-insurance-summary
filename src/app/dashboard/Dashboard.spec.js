import React from 'react';
import { render } from '@testing-library/react';
import NoAccess from '../../component/noAccess'; // Corrected the import
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'; // Corrected the import

jest.mock('../../styles/Login.modules.css', () => ({}));

// Mock dependencies
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));
jest.mock('next/navigation', () => ({
  __esModule: true, // Ensure useRouter is treated as a module
  useRouter: jest.fn(), // Mock useRouter function
}));

describe('noAccess component', () => {
  it('redirects to landing page when session is inactive', () => {
    const replaceMock = jest.fn();
useRouter.mockReturnValueOnce({ replace: replaceMock });

    useSelector.mockReturnValueOnce({ loginReducer: { sessionActive: false } });

    render(<NoAccess />);

    // Check if replace function is called with the expected path
    expect(replaceMock).toHaveBeenCalledWith('/landing');
  });

  it('does not redirect when session is active', () => {
    const redirectMock = jest.fn();
    useRouter.mockReturnValueOnce({ replace: redirectMock }); // Mock useRouter to return an object with replace function

    useSelector.mockReturnValueOnce({ loginReducer: { sessionActive: true } });

    render(<NoAccess />);

    // Check if replace function is not called
    expect(redirectMock).not.toHaveBeenCalled();
  });
});
