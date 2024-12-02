import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Counter from './Counter';
import CounterContainer from './CounterContainer';
import { useState } from 'react';

function App() {

  const [limiteValue, setLimiteValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [maxvalue, setMaxValue] = useState(10);

  const appInfo = {
    Name: 'mon app',
    Message: 'mon compteur'
  }
  const counterConstants = {
    minValue: minValue,
    limiteValue: limiteValue,
    maxValue: maxvalue  }

  const onChangeLimiteValueInput = (e) =>{
    setLimiteValue(e.target.value);
  }
  const onChangeMinValueInput = (e) =>{
    setMinValue(e.target.value);
  }
  const onChangeMaxValueInput = (e) =>{
    setMaxValue(e.target.value);
  }

  return (
    <div className="App">
      <Title myMessage={appInfo.Message}></Title>
      <p>Limite value</p>
      <input onChange={onChangeLimiteValueInput}></input>
      <p>Min value</p>
      <input onChange={onChangeMinValueInput}></input>
      <p>Max value</p>
      <input onChange={onChangeMaxValueInput}></input>
      <CounterContainer>
      <Counter {...counterConstants}/>
        </CounterContainer>

    </div>
  );
}
export default App;
