import { render, screen } from '../../../../../testUtils'
import '@testing-library/jest-dom'

import Input from "../Input";

describe('Input', () => {

  const setup = () => render(<Input />);

  it('renders input field', () => {
    setup()
    const inputField = screen.getByTestId('input-field')
    expect(inputField).toBeInTheDocument();
  })
})