import logo from './logo.svg';
import './App.css';

function App() {
  const myMessage = "HELLO WORLD"
  return (
    <div className="App">
      <p> {myMessage}</p>
      <img src={logo} className='App-logo' alt='logo'/>*
      <p> {myMessage}</p>
    </div>
  );
}
export default App;
