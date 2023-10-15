import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("userList", () => {
  const users = ["Steve", "Ashe", "Ana", "Para"];
  test("renders 유저", () => {
    render(<UserList users={users} />);
    const ulElement = screen.getAllByRole("listitem");
    expect(ulElement).toHaveLength(4);
  });

  test("renders 유저가 몇명이지 맞는가?", () => {
    render(<UserList users={users} />);

    const ulElement = screen.queryAllByRole("listitem"); // getAllByRole를 쓰면 배열이 없는경우가 체크가 되지 않음
    expect(ulElement).toHaveLength(users.length);
    // expect(ulElement).not.toBeInTheDocument(); // 배열이 존재하지 않는지 체크
  });

  test("유저 타이틀이 나타나는지", async () => {
    render(<UserList users={users} />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(); // 디버그 포인트

    // Promise를 반환하는 findBy...
    const headingElement = await screen.findByRole(
      "heading",
      {
        name: /유저 목록/,
      },
      {
        timeout: 3000, // 1초가 넘어가는 것들은 에러처리가 나기 때문에 직접 설정해줄 필요가 있다.
      }
    );

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(); // 디버그 포인트
    expect(headingElement).toBeInTheDocument();
  });
});
