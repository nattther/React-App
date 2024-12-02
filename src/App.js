import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Counter from "./Counter";
import CounterContainer from "./CounterContainer";
import { useState } from "react";
import InputComponent from "./InputComponent";

function App() {
  const [limiteValue, setLimiteValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [maxvalue, setMaxValue] = useState(10);

  const appInfo = {
    Name: "mon app",
    Message: "mon compteur",
  };
  const counterConstants = {
    minValue: minValue,
    limiteValue: limiteValue,
    maxValue: maxvalue,
  };

  return (
    <div className="App">
      <Title myMessage={appInfo.Message}></Title>
      <InputComponent title='Limite Value' onChangeHandler={setLimiteValue}/>
      <InputComponent title='Min Value' onChangeHandler={setMinValue}/>
      <InputComponent title='Max Value' onChangeHandler={setMaxValue}/>
      <CounterContainer>
        <Counter {...counterConstants} />
      </CounterContainer>
    </div>
  );
}
export default App;
