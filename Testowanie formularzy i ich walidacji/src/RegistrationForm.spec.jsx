import {render, screen, waitFor} from '@testing-library/react'
import { RegistrationForm } from './RegistrationForm'
import {userEvent} from '@testing-library/user-event'

describe('<RegistrationForm/>', () => {
    test('should render render email password and button', () => {
       render(<RegistrationForm/>)
       expect(screen.getByLabelText('Email:')).toBeInTheDocument()
       expect(screen.getByLabelText('Password:')).toBeInTheDocument()
       expect(screen.getByRole('button', {name: 'Register'}))
    })

    test('displays error when email field is empty', async () => {
        const user = userEvent.setup()
        render(<RegistrationForm/>)
        await user.click(screen.getByText('Register'));
        expect(await screen.findByText('Email is required.')).toBeInTheDocument()
    })

    test('displays error for invalid email format', async () => {
        const user = userEvent.setup()
        render(<RegistrationForm/>)
        
        await user.type(screen.getByLabelText('Email:'), 'wrongemail')
        await user.click(screen.getByText('Register'))
        expect(await screen.findByText('Provided email address is invalid.')).toBeInTheDocument()
    })

    test('displays error when password field is empty', async () => {
        const user = userEvent.setup()
        render(<RegistrationForm/>)
        await user.click(screen.getByText('Register'))
        expect(await screen.findByText('Password is required.')).toBeInTheDocument()
    })

    test('displays error when password its to short', async () => {
        const user = userEvent.setup()
        render(<RegistrationForm/>)
        await user.type(screen.getByLabelText('Password:'), 'siema')
        await user.click(screen.getByText('Register'))
        expect(await screen.findByText('Password must be at least 8 characters long.')).toBeInTheDocument()
    })

    test('submits form with correct data', async () => {
        const user = userEvent.setup()
        render(<RegistrationForm/>)

        await user.type(screen.getByLabelText('Email:'), 'test@wp.pl')
        await user.type(screen.getByLabelText('Password:'), 'password123')
        await user.click(screen.getByText('Register'))

        await waitFor(() => {
            expect(screen.queryByText('Email is required.')).not.toBeInTheDocument()
            expect(screen.queryByText('Provided email address is invalid.')).not.toBeInTheDocument()
            expect(screen.queryByText('Password is required.')).not.toBeInTheDocument()
            expect(screen.queryByText('Password must be at least 8 characters long.')).not.toBeInTheDocument()
        })

    })
})