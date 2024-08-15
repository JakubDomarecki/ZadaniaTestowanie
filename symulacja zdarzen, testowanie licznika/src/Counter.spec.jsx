import {screen, render} from '@testing-library/react'
import { Counter } from './Counter'
import {userEvent} from '@testing-library/user-event'

describe('<Counter/>', () => {
  test('Counter initialization tests', () => {
    render(<Counter/>)
    expect(screen.getByTestId('counter')).toHaveTextContent('0')
  })
  
  test('Counter initialization tests', () => {
    render(<Counter initialValue='7'/>)
    expect(screen.getByTestId('counter')).toHaveTextContent('7')
  })

  test('Counter initialization tests', () => {
    render(<Counter initialValue='157'/>)
    expect(screen.getByTestId('counter')).toHaveTextContent('10')
  })

  test('Counter initialization tests', () => {
    render(<Counter initialValue='-157'/>)
    expect(screen.getByTestId('counter')).toHaveTextContent('0')
  })

  test('Counter initialization tests', async () => {
    render(<Counter initialValue='5'/>)
    const user = userEvent.setup()

    const button = screen.getByText('+')
    await user.click(button)

    expect(screen.getByTestId('counter')).toHaveTextContent('6')
  })


  test('Counter initialization tests', async () => {
    render(<Counter initialValue='5'/>)
    const user = userEvent.setup()

    const button = screen.getByRole("button", {name: '-'})
    await user.click(button)

    expect(screen.getByTestId('counter')).toHaveTextContent('4')
  })

  test('Counter initialization tests', async () => {
      const user = userEvent.setup()
      render(<Counter/>)

      const button = screen.getByRole('button', {name: 'Reset'})
      await user.click(button)

      expect(screen.getByTestId('counter')).toHaveTextContent('0')
  })

  test('Counter initialization tests', async () => {
    const user = userEvent.setup()
    render(<Counter/>)
    
    const button = screen.getByRole('button', {name: '-'})

    expect(button).toBeDisabled();

    await user.click(button)
    expect(screen.getByTestId('counter')).toHaveTextContent('0')

  })
})

