import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Header/>
      <TaskList/>
    </div>

  );
}

export default App;
