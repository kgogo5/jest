import React, { useEffect, useState } from "react";
import "@testing-library/jest-dom/extend-expect";

const SetButton = ({ age }: { age?: number }) => {
  const [adult, setAdult] = useState(false);

  useEffect(() => {
    if (age && age >= 18) {
      setAdult(true);
    }
  }, [age]);

  return (
    <button disabled={!adult}>
      <span style={{ color: adult ? "green" : "red" }}>
        {adult ? "가입 가능 합니다." : "18세 이상만 가입하실 수 있습니다."}
      </span>
    </button>
  );
};

export default SetButton;
