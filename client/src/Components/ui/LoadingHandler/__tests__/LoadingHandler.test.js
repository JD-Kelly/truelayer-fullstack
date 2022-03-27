import { render, screen } from '../../../../../testUtils'
import '@testing-library/jest-dom'

import LoadingHandler from '../LoadingHandler'

describe('LoadingHandler', () => {

  const setup = () => render(<LoadingHandler />);

  it('renders loading handler', () => {
    setup()
    const loadingText = screen.getByTestId('loading-message')
    expect(loadingText).toBeInTheDocument();
  })
})