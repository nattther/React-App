import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Counter from './Counter';

function App() {

  const appInfo = {
    Name: 'mon app',
    Message: 'mon compteur'
  }
  const valueInfo = {
    min: 0,
    limite: 5,
    max: 10
  }

  return (
    <div className="App">
      <Title myMessage={appInfo.Message}></Title>
      <Counter minValue={valueInfo.min} limiteValue={valueInfo.limite} maxValue = {valueInfo.max} />
    </div>
  );
}
export default App;
