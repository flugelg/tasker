import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import TaskList from './components/TaskList';
import About from './components/About';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/welcome">
          <WelcomePage/>
        </Route>
        <Route path="/head">
          <Header/>
        </Route>
        <Route path="/">
          <TaskList/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
