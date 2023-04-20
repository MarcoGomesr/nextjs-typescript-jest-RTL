import { render, screen } from '@testing-library/react'
import Hello from './Hello'

it('should return the string "Hello World"', () => {
  render(<Hello />)

  const myElement = screen.getByText('Hello World')
  expect(myElement).toBeInTheDocument()
})
