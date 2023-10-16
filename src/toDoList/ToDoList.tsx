import React, { useEffect, useState } from "react";
import axios from "axios";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response: any) => {
        setList(response?.data);
      })
      .catch(() => {
        seterrorMessage("Error...");
      });
  }, []);

  return (
    <>
      <h2>To Do List</h2>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <ul>
          {list?.map((todo: any) => {
            return (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : undefined,
                }}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ToDoList;
