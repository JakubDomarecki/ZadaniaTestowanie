import {render, screen} from '@testing-library/react'
import { UserProfile } from './UserProfile'

describe('<UserProfile/>', () => {

  test("displays loading state initially", async () => {
    render(<UserProfile userId={3} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  
  test('shows user data after successful loading', async () => {
    render(<UserProfile userId={3}/>)

    expect(await screen.findByText("John Doe")).toBeInTheDocument()
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  })

  
  test('handles user not found state', async () => {
    render(<UserProfile userId={2}/>)
    expect(await screen.findByText("User not found.")).toBeInTheDocument();
  })

  test("handles error state", async () => {
    render(<UserProfile userId={1} />);
    expect(await screen.findByText("Oops, something went wrong.")).toBeInTheDocument();
  });

})