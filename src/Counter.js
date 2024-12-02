import { useState } from "react";

function Counter({...props}) {
    const limiteValue = props.limiteValue
    const maxValue = props.maxValue
    const minValue = props.minValue
  const [counter, setCounter] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const increment = () => {
    const newValue = counter + 1;
    setCounter(newValue);
    isOverSetter(newValue);
  };

  const decrement = () => {
    const newValue = counter - 1;
    setCounter(newValue);
    isOverSetter(newValue);
  };

  const isOverSetter = (actualCounter) => {
    if (actualCounter >= limiteValue) {
      setIsOver(true);
    } else {
      setIsOver(false);
    }
  };

  return (
    <>
      <p>{counter}</p>
      <button disabled={counter >=maxValue}  onClick={increment}> Increment Counter </button>
      <button disabled={counter <= minValue} onClick={decrement}> Decrement Counter </button>
      {counter !== limiteValue && (
        <>
          {" "}
          {isOver ? (
            <p>Mon compteur est au dessus de {limiteValue} et sa valeur est {counter} </p>
          ) : (
            <p> Mon compteur est en dessous de {limiteValue} </p>
          )}{" "}
        </>
      )}
    </>
  );
}

export default Counter;
