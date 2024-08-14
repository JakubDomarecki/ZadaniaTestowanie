import { describe, test, expect } from "vitest";
import { queryByText, render, screen } from "@testing-library/react";

import { TaskList } from "./TaskList";


describe('<TaskList/>', () => {
   test('loading state is visible', () => {
    render(<TaskList/>)

    expect(screen.getByText('Data is loading...'))
   })

   test('task list loads correctly', async () => {
    render(<TaskList/>)

    const task1 = await screen.findByText('Task 1')
    const task2 = await screen.getByText('Task 2')

    expect(task1).toBeInTheDocument()
    expect(task2).toBeInTheDocument()
   })

   
   test("no visible list upon initial rendering", () => {
    render(<TaskList />);
  
    const listItems = screen.queryAllByRole("listitem");
  
    expect(listItems.length).toBe(0);
  });


  test('loading state is not present in the DOM after the list has loaded', async () => {
    render(<TaskList/>)

    await screen.findByText('Task 1')
    const loading = screen.queryByText('Data is loading...');

    expect(loading).not.toBeInTheDocument();

  })
})

