import logo from './img/header.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Le site sur le cancer du sein arrive bientôt !
        </p>
        <a
          className="App-link"
          href="https://www.e-cancer.fr/Patients-et-proches/Les-cancers/Cancer-du-sein/Les-points-cles"
          target="_blank"
          rel="noopener noreferrer"
        >
          Institut national du cancer
        </a>
      </header>
    </div>
  );
}

export default App;
