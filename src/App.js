import logo from './logo.svg';
import './App.css';
import Title from './Title';

function App() {
  const Message = "HELLO WORLD"
  return (
    <div className="App">
      <Title myMessage={Message}></Title>
      <img src={logo} className='App-logo' alt='logo'/>
    </div>
  );
}
export default App;
