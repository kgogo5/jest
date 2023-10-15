import React from "react";

const MultiInput = () => {
  return (
    <>
      <h2>인풋 요소입니다.</h2>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" value="Steve Kim" readOnly />

      <h3>두번째 인풋 요소입니다.</h3>
      <label htmlFor="age">나이</label>
      <input type="number" id="age" />

      <div data-testid="myDiv" />

      <h3>텍스트 에어리어 요소입니다.</h3>
      <label htmlFor="profile">자기소개</label>
      <textarea id="profile"></textarea>
    </>
  );
};

export default MultiInput;
