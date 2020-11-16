import logo from './logo.svg';
import './App.css';
import GnomeContainer from './containers/GnomeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Search Gnomes with suggestions.
        </p>
      </header>
      <GnomeContainer />
    </div>
  );
}

export default App;
