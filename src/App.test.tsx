import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 로그인이 필요한 상황", () => {
  render(<App />);
  const linkElement = screen.getByText(/로그인 해주세요/);
  expect(linkElement).toBeInTheDocument();
});

test("renders 로그인 된 상황", () => {
  render(<App user={{ name: "Steve Kim" }} />);
  const linkElement = screen.getByText(/Steve Kim/i);
  expect(linkElement).toHaveTextContent(/어서오세요/);
});
