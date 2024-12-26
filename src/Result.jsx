import React from "react";

const Result = (props) => {
  let { number, inc, dec, reset, x } = props;
  return (
    <div>
      {x || 70}
      <h1  style={number ==0 ? {color: "red"} : {color: "blue"}}>{number}</h1>
      <button onClick={inc}>افزایش</button>
      <button onClick={reset}>بازیابی</button>
      <button style={{backgroundColor: number == 0 ? "red": ""}} onClick={dec}>کاهش</button>
    </div>
  );
};
/*
Result.defaultProps= {
  x: 80
}*/

export default Result;
