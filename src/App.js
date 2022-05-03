import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Route path="/head">
        <Header/>
      </Route>
      <Route path="/">
        <TaskList/>
      </Route>
    </div>

  );
}

export default App;
