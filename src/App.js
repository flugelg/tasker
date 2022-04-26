import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

function App() {
  return (
    <div>
      <Header/>
      <TaskList/>
      <TaskItem/>
    </div>

  );
}

export default App;
