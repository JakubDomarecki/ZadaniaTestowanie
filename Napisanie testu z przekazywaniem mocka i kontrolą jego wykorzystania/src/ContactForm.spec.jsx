import {screen, render}  from '@testing-library/react'
import { ContactForm } from './ContactForm'
import {userEvent} from '@testing-library/user-event'

describe('<ContactForm/>', () => {
    test('return correcrtly form', () => {

        const mockSubmit = vi.fn();

        render(<ContactForm onSubmit={mockSubmit} />)
        expect(screen.getByLabelText('Name:')).toBeInTheDocument()
        expect(screen.getByLabelText('Message:')).toBeInTheDocument()
        expect(screen.getByText('Send')).toBeInTheDocument()
    })

   test('calls onSubmit with form data', async () => {
        const mockSubmit = vi.fn().mockName('mockSubmit')
        const user = userEvent.setup()
        render(<ContactForm onSubmit={mockSubmit} />)

        await user.type(screen.getByLabelText('Name:'), 'Jakub')
        await user.type(screen.getByLabelText('Message:'), 'siemano')
        await user.click(screen.getByText('Send'))

        expect(mockSubmit).toHaveBeenCalledWith({ name: 'Jakub', message: 'siemano'})
   })

   test('does not call onSubmit with incomplete form data', async () => {
    const mockSubmit = vi.fn()
    const user = userEvent.setup()
    render(<ContactForm onSubmit={mockSubmit}/>)
    await user.type(screen.getByLabelText("Message:"), "Missing name in the form.");
    await user.click(screen.getByText('Send'));
    expect(mockSubmit).not.toHaveBeenCalled();
   })

   
})