import { Summary, Results } from './components';

function App() {
  return (
    <div className="app">
      <div className="results-container" role="main">
        <Results />
        <Summary />
      </div>
    </div>
  );
}

export default App;
