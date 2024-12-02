import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isOver5, setIsOver5] = useState(false);

  const increment = () => {
    const newValue = counter + 1;
    setCounter(newValue);
    isOver5Setter(newValue);

  };

  const decrement = () => {
    const newValue = counter - 1;
    setCounter(newValue);
    isOver5Setter(newValue);

  };

  const isOver5Setter = (newValue) => {
    if (newValue >= 5) {
      setIsOver5(true);
    } else {
      setIsOver5(false);
    }
  };


  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}> Increment Counter </button>
      <button onClick={decrement}> Decrement Counter </button>
      { counter !== 5 &&
       <> {isOver5 ?  <p>Mon compteur est au dessus de 5 </p> : <p> Mon compteur est en dessous de 5 </p>} </>
       }
    </>
  );
}

export default Counter;
