import './App.css';
import GitHubCard from './GitHubCard';


function App() {

  return (
    <div className="App">
      <GitHubCard />
      <header className="App-header">
        <h2>hello</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
