import {render, screen} from '@testing-library/react'
import { UserProfile } from './UserProfile'

const avatarUrl = 'https://img.freepik.com/premium-wektory/ikona-man-avatar-na-stronie-internetowej-dokument-projekt-plakatu-aplikacja-do-drukowania-avatar-i-ludzie-styl-ikony-koncepcji_52494-1157.jpg?size=626&ext=jpg'

describe('<UserProfile />', () => {

  it('correctly shows name, surname and email after provided', () => {
    render(<UserProfile name='Jakub' surname='jakis' email='test@wp.pl'/>)

    expect(screen.getByText('Name: Jakub')).toBeInTheDocument()
    expect(screen.getByText('Surname: jakis')).toBeInTheDocument()
    expect(screen.getByText('Email: test@wp.pl')).toBeInTheDocument()
  })

  it('shows avatar when is provided', () => {
    render(<UserProfile avatarUrl={avatarUrl}/>)

    expect(screen.getByAltText('User avatar')).toHaveAttribute('src', avatarUrl)
  })

  
  it('does not show avatar when isnt provided', () => {
    render(<UserProfile/>)

    expect(screen.getByText("Name: Information not provided")).toBeInTheDocument();
    expect(screen.getByText("Surname: Information not provided")).toBeInTheDocument();
    expect(screen.getByText("Email: Information not provided")).toBeInTheDocument();
  })
})