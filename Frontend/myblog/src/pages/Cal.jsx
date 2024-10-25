import React, { useState } from "react";

const Cal = ({ count, setCount }) => {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count > 0 && (
        <button onClick={() => setCount(count - 1)}>Decremet</button>
      )}
    </>
  );
};

export default Cal;
