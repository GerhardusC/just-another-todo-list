import './App.css';
//Importing the inputform and the todos display components.
import InputForm from './components/InputForm';
import DisplayTodos from './components/DisplayTodos';

function App() {
  //Displaying imported components.
  return (
    <div className="App">
      <InputForm />
      <DisplayTodos />
    </div>
  );
}

export default App;
