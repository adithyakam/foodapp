import { render, screen } from "@testing-library/react";
import Help from "../Components/Help/Help";

import "@testing-library/jest-dom";

test("help page", () => {
  render(<Help />);

  const name = screen.getByText("Help");

  expect(name).toBeInTheDocument();
});
