import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Counter from './Counter';
import CounterContainer from './CounterContainer';

function App() {

  const appInfo = {
    Name: 'mon app',
    Message: 'mon compteur'
  }
  const counterConstants = {
    minValue: 0,
    limiteValue: 5,
    maxValue: 10
  }

  return (
    <div className="App">
      <Title myMessage={appInfo.Message}></Title>
      <CounterContainer>
      <Counter {...counterConstants}/>
        </CounterContainer>

    </div>
  );
}
export default App;
