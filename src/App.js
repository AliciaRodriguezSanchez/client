import './App.css';
import Header  from './components/header';
import MainContainer from './containers';

function App() {

  return (
    <div className="App">
        <header>
          <Header/>
          <MainContainer />
        </header>
    </div>
  );
}

export default App;
