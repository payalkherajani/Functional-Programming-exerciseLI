import './App.css';
import Filter from '../src/components/HighOrderFunc/Filter';
import Questions from './components/Immutability/Questions';
import PureQue from './components/purefunctions/PureQue';
import Homework from './components/Homework/Homework';
import Currying from './components/Currying/Currying';
import Composition from './components/Composition/Composition';
import Compose from './components/Compose/Compose';

function App() {
  return (
    <div className="App">
      <h1>FP EXERCISES </h1>
      <h2>Concepts</h2>
      <Filter />
      <Questions />
      <PureQue />
      <Currying />
      <Composition />
      <hr />
      <h2>Homework</h2>
      <Homework />
      <hr />
      <h2>One Homework</h2>
      <Compose />
      <hr />
    </div>
  );
}

export default App;
