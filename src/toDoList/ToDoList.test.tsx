import React from "react";
import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("To Do List Test", () => {
  test("헤더 영역과 리스트 확인", async () => {
    render(<ToDoList />);
    const ToDoTitleElement = screen.getByRole("heading");
    const TodoListElement = screen.queryAllByRole("listitem");
    expect(ToDoTitleElement).toHaveTextContent(/To Do List/i);
    // expect(TodoListElement).not.toBeInTheDocument();
  });

  test("에러를 강제로 만들었을 때", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        (request, response, context) => {
          return response(context.status(500));
        }
      )
    );
    render(<ToDoList />);
    const error = await screen.findByText(/Error.../i);
    expect(error).toBeInTheDocument();
  });

  test("3개의 리스트가 잘 나오는지.", async () => {
    render(<ToDoList />);
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(3);
  });
});
