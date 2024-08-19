import {screen, render} from '@testing-library/react'
import { AdvancedInput } from './AdvancedInput'
import {fireEvent} from '@testing-library/react'


describe('<AdvancedInput', () => {
  test('component is in document', () => {
    render(<AdvancedInput isVisible={true}/>)
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  })

  test('component is in document', () => {
    render(<AdvancedInput isVisible={false}/>)
    const input = screen.queryByRole('textbox');
    expect(input).not.toBeInTheDocument();
  })

  test('component isnt disabled and has correct classname', () => {
    render(<AdvancedInput isDisabled={false} isVisible className='active'/>)
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('active');
  })

  test('input is disabled', () => {
    render(<AdvancedInput isDisabled isVisible/>)
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled()
  })

  test('text in input', () => {
    render(<AdvancedInput isVisible/>)
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'new tekst' } });

    expect(input).toHaveValue('new tekst')
  })
})