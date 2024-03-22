import React, { useState, useCallback } from "react";
import Button from "./Button";
import Age from "./Age";
 
export default function CallbackHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);
 
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
 
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
 
  return (
<div>
<h2>Count: {count}</h2>
<Button handleClick={handleClick}>Increment count</Button>
<h2>Age:{age}</h2>
<Age ageHandler={incrementAge}>Increment Age</Age>
</div>
  );
}