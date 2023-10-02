import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from "../Components/Redux/store";
import { Provider } from "react-redux";

it("should be login btn present", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginbtn = screen.getByRole("button", { name: "login" });

  expect(loginbtn).toBeInTheDocument();
});

it("should be login btn working ", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginbtn = screen.getByRole("button", { name: "login" });

  fireEvent.click(loginbtn);

  const submitbtn = screen.getByTestId("login-submit");

  submitbtn.toBeInTheDocument();
});
