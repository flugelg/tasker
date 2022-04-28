import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <div>
      <Header/>
      <TaskList/>
      <CreateTask/>
    </div>

  );
}

export default App;
