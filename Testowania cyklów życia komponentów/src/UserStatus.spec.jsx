import {fireEvent, render, screen} from '@testing-library/react'
import { ToggleContent, UserStatus } from './UserStatus'

describe('<UserStatus/>', () => {
  test('correctly shows data name', () => {
    
    const userId = 'user123'
    const userData = { name: "John Doe", active: true };
    
    localStorage.setItem(`user-${userId}`, JSON.stringify(userData));
    
    render(<UserStatus userId={userId}/>)
    
    expect(screen.getByText(userData.name))
  });


  test('correctly updates user data in localStorage', () => {
    const userId = "user123";
    const initialUserData = { name: "John Doe", active: false };

    localStorage.setItem(`user-${userId}`, JSON.stringify(initialUserData));

    render(<UserStatus userId={userId}/>)
    fireEvent.click(screen.getByText('Set Active'));

    expect(localStorage.getItem(`user-${userId}`)).toContain('"active":true')
  })

  test('correctly unmounts data from localstorage', () => {
    const userId = 'user123'
    const userData = { name: "John Doe", active: true };

    localStorage.setItem(`user-${userId}`, JSON.stringify(userData));

    const {unmount} = render(<UserStatus userId={userId}/>)

    unmount();
    expect(localStorage.getItem(`user-${userId}`)).toBeNull();

  })

})