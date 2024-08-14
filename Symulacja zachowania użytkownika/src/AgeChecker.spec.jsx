import { AgeChecker, LABELS } from "./AgeChecker";
import { fireEvent, render, screen } from '@testing-library/react'

describe('<AgeChecker/>', () => {
    test("initially shows no message and loading state is not present", () => {
        render(<AgeChecker />);
      
          expect(screen.queryByText(LABELS.YOU_ARE_ADULT)).not.toBeInTheDocument();
          expect(screen.queryByText(LABELS.YOU_ARE_ADULT)).not.toBeInTheDocument();
          expect(screen.queryByText(LABELS.YOU_ARE_MINOR)).not.toBeInTheDocument();
      });

      test("shows loading state after button click and then shows age confirmation message", async () => {
        render(<AgeChecker/>)

        const inputElement = screen.getByRole('spinbutton');

        fireEvent.change(inputElement, {
            target: {value: '20'},
        });

        fireEvent.focusOut(inputElement);

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByRole("status")).toBeInTheDocument();
        expect(await screen.findByText(LABELS.YOU_ARE_ADULT)).toBeInTheDocument();
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
      })


      test("shows not adult message for age under 18", async () => {
        render(<AgeChecker />);
      
        const inputElement = screen.getByPlaceholderText(LABELS.TYPE_YOUR_AGE);
      
        fireEvent.change(inputElement, {
          target: { value: "16" },
        });
        fireEvent.focusOut(inputElement);
      
        fireEvent.click(screen.getByText(LABELS.CHECK));
      
        expect(await screen.findByText(LABELS.YOU_ARE_MINOR)).toBeInTheDocument();
      });
})

