import React from "react";
import { render, screen } from "@testing-library/react";
import SetButton from "./SetButton";

test("renders 나이 정보가 들어오지 않았을 때", () => {
  render(<SetButton />);
  const buttonElement = screen.getByRole("button");
  const spanElement = screen.getByText(/18세 이상만 가입하실 수 있습니다./);
  expect(buttonElement).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
  expect(buttonElement).toBeDisabled();
  expect(spanElement).toHaveStyle({ color: "red" });
});

test("renders 나이가 18세 이하일 때", () => {
  render(<SetButton age={15} />);
  const buttonElement = screen.getByRole("button");
  const spanElement = screen.getByText(/18세 이상만 가입하실 수 있습니다./);
  expect(buttonElement).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
  expect(buttonElement).toBeDisabled();
  expect(spanElement).toHaveStyle({ color: "red" });
});

test("renders 나이가 18세 이상일 때", () => {
  render(<SetButton age={23} />);
  const buttonElement = screen.getByRole("button");
  const spanElement = screen.getByText(/가입 가능 합니다./);
  expect(buttonElement).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
  expect(buttonElement).toBeEnabled();
  expect(spanElement).toHaveStyle({ color: "green" });
});
