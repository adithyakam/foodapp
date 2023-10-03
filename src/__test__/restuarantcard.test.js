import { fireEvent, render, screen } from "@testing-library/react";
import ResCard from "../__mocks__/restuarantcard.json";
import { act } from "react-dom/test-utils";
import { store } from "../Components/Redux/store";
import { Provider } from "react-redux";
import RestuarantDetails from "../Components/RestuarantDetails/RestuarantDetails";
import "@testing-library/jest-dom";
import Header from "../Components/Header/Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ResCard);
    },
  });
});

it("should be page loaded", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <RestuarantDetails />
      </Provider>
    );
  });

  const resname = screen.getByText("McDonald's");

  expect(resname).toBeInTheDocument();
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ResCard);
    },
  });
});

it("should load accordian ", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <RestuarantDetails />
      </Provider>
    );
  });

  const accordian = screen.getByText("Jain Friendly");

  fireEvent.click(accordian);

  expect(screen.getAllByTestId("menu-items").length).toBe(3);
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ResCard);
    },
  });
});
it("add items to cart ", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <RestuarantDetails />

        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });

  const accordian = screen.getByText("Jain Friendly");

  fireEvent.click(accordian);

  //   const btns = screen.getAllByRole("button", { name: "Add" });
  let btns = screen.getAllByTestId("add-btn");

  expect(screen.getByTestId("cart-value").textContent).toBe("0");

  fireEvent.click(btns[0]);
  btns = screen.getAllByTestId("add-btn");

  expect(screen.getByTestId("cart-value").textContent).toBe("1");
  btns = screen.getAllByTestId("add-btn");

  fireEvent.click(btns[1]);

  expect(screen.getByTestId("cart-value").textContent).toBe("2");
});
