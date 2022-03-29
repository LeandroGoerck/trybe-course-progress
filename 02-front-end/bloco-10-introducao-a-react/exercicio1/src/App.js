import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = ['lavar a  louça', 'varrer a casa', 'fazer os exercicios da trybe', 'fazer o esquema elétrico'];

function App() {
  return (
    <div >
      <ol>
        {toDoList.map((task) => <li>{task}</li>)}
      </ol>
    </div>
  );
}

export default App;
