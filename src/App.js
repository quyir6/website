import './tic-tac-toe.css';
import Game from './components/Game'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Tic Tac Toe </h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
