import {Link, useRouteMatch} from "react-router-dom";

const Course = ({course}) => {
  const {url} = useRouteMatch();

  return (
    <li className="course media group">
      <img className="course-img" src={course.im} alt="course" />
      <div>
        <h3>
          <Link to={`${url}?id=${course.id}`}>{course.title}</Link>
        </h3>
        <p>{course.description}</p>
      </div>
    </li>
  );
};

export default Course;
