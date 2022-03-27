import { render, screen } from '../../../../../testUtils'
import '@testing-library/jest-dom'

import ErrorHandler  from "../ErrorHandler";

describe('ErrorHandler', () => {

  const setup = () => render(<ErrorHandler />);

  it('renders error message and retry button', () => {
    setup()
    const errorMessage = screen.getByTestId('error-message')
    const retryButton = screen.getByTestId('retry-button')
    expect(errorMessage).toBeInTheDocument();
    expect(retryButton).toBeInTheDocument();
  })
})