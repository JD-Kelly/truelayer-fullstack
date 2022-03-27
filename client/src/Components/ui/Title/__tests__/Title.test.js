import { render, screen } from '../../../../../testUtils'
import '@testing-library/jest-dom'

import Title from '../Title'

describe('Title', () => {

  const setup = () => render(<Title />);

  it('renders header and subheader', () => {
    setup()
    const headerText = screen.getByTestId('header-text')
    const subHeaderText = screen.getByTestId('subheader-text')
    expect(headerText).toBeInTheDocument();
    expect(subHeaderText).toBeInTheDocument();
  })
})