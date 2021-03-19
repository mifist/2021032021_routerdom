import {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

const About = lazy(() => import("./components/About"));
const Teachers = lazy(() => import("./components/Teachers"));
const Courses = lazy(() => import("./components/Courses"));
const Featured = lazy(() => import("./components/Featured"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => (
  <div className="container">
    <Header />
    <Suspense fallback={<h1>Loading ....</h1>}>
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
    </Suspense>
  </div>
);

export default App;
