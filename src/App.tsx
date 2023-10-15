import React from "react";
import "./App.css";
import "@testing-library/jest-dom/extend-expect";

function App({ user }: { user?: { name?: string } }) {
  return (
    <div className="App">
      {user?.name ? (
        <h2>어서오세요 {user.name}님</h2>
      ) : (
        <div>
          <div>
            <h2>로그인 해주세요</h2>
          </div>
          <button>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
