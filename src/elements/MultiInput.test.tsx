import React from "react";
import { render, screen } from "@testing-library/react";
import MultiInput from "./MultiInput";

test("renders 헤더, 인풋 요소 찾기", () => {
  render(<MultiInput />);
  const headElement = screen.getByRole("heading", {
    level: 2,
  });
  const inputElement = screen.getByRole("textbox", { name: "이름" });
  const ageInputElement = screen.getByLabelText("나이");
  const textareaElement = screen.getByLabelText("자기소개", {
    selector: "textarea",
  });
  const nameInputElement = screen.getByDisplayValue(/steve kim/i);
  // data-testid="myDiv" 요소가 있는지 확인
  const testId = screen.getByTestId("myDiv");
  expect(headElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(ageInputElement).toBeInTheDocument();
  expect(textareaElement).toBeInTheDocument();
  expect(nameInputElement).toBeInTheDocument();
  expect(testId).toBeInTheDocument();
});
