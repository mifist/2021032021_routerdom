import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import NotFound from "./components/NotFound";
import Featured from './components/Featured'


const App = () => (
  <div className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/courses" render={() => <Courses />} />
      <Route exact path="/teachers" component={Teachers} />
      <Route path="/teachers/:name" component={Featured} />

      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
