import {NavLink, Route, Redirect, useRouteMatch} from "react-router-dom";
import CoursesContainer from './courses/CoursesContainer'
import {frontEnd, htmlCourses, javaScriptCourses} from '../data'



const Courses = () => {
  const {url, path} = useRouteMatch();

  return (
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li>
            <NavLink to={`${url}/html`}>HTML</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/css`}>CSS</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/javascript`}>JavaScript</NavLink>
          </li>
        </ul>
      </div>

      {/* Nested Routes */}
      <Route
        exact
        path={path}
        render={() => <Redirect to={`${url}/html`} />}
      />

      <Route path={`${path}/html`} render={() => <CoursesContainer data={htmlCourses}/>} />
      <Route path={`${path}/css`} render={() => <CoursesContainer data={frontEnd}/>} />
      <Route path={`${path}/javascript`}>
          <CoursesContainer data={javaScriptCourses}/>
        </Route>
    </div>
  );
};

export default Courses;
