import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('Header Test', () => {
    render(<Header />)
    const buttonTest = screen.getByText('Finance Studys')
    expect(buttonTest).toBeInTheDocument()
  })
})
