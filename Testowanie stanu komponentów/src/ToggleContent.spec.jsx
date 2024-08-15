import {fireEvent, render, screen} from '@testing-library/react'
import { ToggleContent } from './ToggleContent'
import {userEvent} from '@testing-library/user-event'

describe('<ToogleContent/>', () => {
  test('content is invisible',() => {
    render(<ToggleContent/>)
    expect(screen.getByText('Content is hidden')).toBeInTheDocument()
  })  

  test('content is visible', async () => {
    render(<ToggleContent/>)

    expect(screen.getByText("Content is hidden")).toBeInTheDocument();

    const button = screen.getByText('Toggle')
    await userEvent.click(button)

    expect(screen.getByText('Content is visible')).toBeInTheDocument()
  })  

})