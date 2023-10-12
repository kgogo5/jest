import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

describe("Jest Test", () => {
  test("Rendering Test", () => {
    render(<App />).debug();
  });
});

export default App;
