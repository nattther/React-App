import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isOver5, setIsOver5] = useState(false);
  const increment = () => {
    setCounter(counter + 1);

    const decrement = () => {
      setCounter(counter - 1);
    };

    const isOver5Setter = () => {
      if (counter > 5) {
        setIsOver5(true);
      } else {
        setIsOver5(false);
      }
    };
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}> Increment Counter </button>
      <button onClick={decrement}> Decrement Counter </button>
      {isOver5 && <p>Mon compteur est au dessus de 5</p>}
    </>
  );
}

export default Counter;
