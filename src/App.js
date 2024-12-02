import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Counter from './Counter';

function App() {
  const Message = "Mon compteur"
  return (
    <div className="App">
      <Title myMessage={Message}></Title>
      <Counter/>
    </div>
  );
}
export default App;
