import React from "react";
import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";

describe("To Do List Test", () => {
  test("헤더 영역과 리스트 확인", async () => {
    render(<ToDoList />);
    const ToDoTitleElement = screen.getByRole("heading");
    const TodoListElement = screen.queryAllByRole("listitem");
    expect(ToDoTitleElement).toHaveTextContent(/To Do List/i);
    // expect(TodoListElement).not.toBeInTheDocument();
  });
});
