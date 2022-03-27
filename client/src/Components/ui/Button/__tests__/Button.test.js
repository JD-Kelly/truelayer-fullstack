import { render, screen } from '../../../../../testUtils'
import '@testing-library/jest-dom'

import Button from '../Button'

describe('Button', () => {

  const setup = () => render(<Button />);

  it('renders button', () => {
    setup()
    const button = screen.getByTestId('submit-button')
    expect(button).toBeInTheDocument();
  })
})