import React, { useState } from "react";
import Result from "./Result";

const Counter = () => {
  let [count, setCount] = useState(0);

  let increase = () => {
    setCount(++count);
  };
  let decrease = () => {
    if(count > 0){
        setCount(--count);
    }
  };
  let reset = () => {
    setCount(0);
  };

  return <div>
    <Result number={count} inc={increase} dec={decrease} reset={reset}  />
  </div>;
};

export default Counter;
