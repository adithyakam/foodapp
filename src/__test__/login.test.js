import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header/Header";
import "@testing-library/jest-dom";
import { BrowserRouter, Outlet } from "react-router-dom";
import { store } from "../Components/Redux/store";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import LoginSideBar from "../Components/LoginSidebar/LoginSideBar";
import About from "../Components/About/About";
import About_Mock from "../__mocks__/about_mock.json";

it("should be login btn present", async () => {
  await act(async () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    )
  );

  const loginbtn = screen.getByRole("button", { name: "login" });

  expect(loginbtn).toBeInTheDocument();
});

it("should be login btn working ", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <LoginSideBar />
      </BrowserRouter>
    </Provider>
  );

  const loginbtn = screen.getByTestId("login-btn");
  fireEvent.click(loginbtn);

  // const searchbtn = screen.getByRole("searchInput", {
  //   target: { value: "adi" },
  // });

  const un = screen.getByText("Username");

  expect(un).toBeInTheDocument();
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(About_Mock);
    },
  });
});

it("should be login reroute to about page ", async () => {
  await act(async () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <LoginSideBar />
          <About />
        </BrowserRouter>
      </Provider>
    )
  );

  const loginbtn = screen.getByTestId("login-btn");
  fireEvent.click(loginbtn);

  const searchInput = screen.getByTestId("search-field");

  fireEvent.change(searchInput, {
    target: { value: "adithya" },
  });

  const submitbtn = screen.getByTestId("login-submit");

  fireEvent.click(submitbtn);

  const name = screen.getByText("name: Adithya");

  expect(name).toBeInTheDocument();
});
