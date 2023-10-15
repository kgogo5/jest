import React, { useEffect, useState } from "react";

const SetButton = ({ age }: { age?: number }) => {
  const [adult, setAdult] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (age && age >= 18) {
      setAdult(true);
    }
  }, [age]);

  return (
    <>
      <h2>{click ? "Logout" : "Login"}</h2>
      <button disabled={!adult} onClick={() => setClick(!click)}>
        <span style={{ color: adult ? "green" : "red" }}>
          {adult ? "가입 가능 합니다." : "18세 이상만 가입하실 수 있습니다."}
        </span>
      </button>
    </>
  );
};

export default SetButton;
