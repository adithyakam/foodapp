import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Restuarants from "../Components/Restuarants/Restuarants";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import ResInfo from "../__mocks__/res_mock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ResInfo);
    },
  });
});

it("should resutarant whats on correctly", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Restuarants />
      </BrowserRouter>
    )
  );

  const whatsonmind = screen.getByText("Whats On Mind?");

  expect(whatsonmind).toBeInTheDocument();
});

it("should resutarant Top Restuarant correctly", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Restuarants />
      </BrowserRouter>
    )
  );

  const topres = screen.getAllByByText("McDonald's");

  expect(topres[0]).toBeInTheDocument();
});
