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

  const topres = screen.getByText("The Belgian Waffle Co.");

  expect(topres).toBeInTheDocument();
});

it("should show all resutarant correctly", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Restuarants />
      </BrowserRouter>
    )
  );

  const topres = screen.getByText("Shree Chaats");

  expect(topres).toBeInTheDocument();
});
