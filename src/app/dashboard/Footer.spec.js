import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

// Mock the CSS file
jest.mock('../../styles/Login.modules.css', () => ({}));

describe('Footer component', () => {
  it('renders with disclosure message', () => {
    const disclosureMessage = 'This is a disclosure message';
    const { getByText } = render(<Footer disclosureMessage={disclosureMessage} />);
    
    expect(getByText(disclosureMessage)).toBeInTheDocument();
  });
});
