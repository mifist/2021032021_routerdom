import Course from "./Course";
import { htmlCourses } from "../../data";

const HTML = (props) => {
  let courses = htmlCourses.map((course) => {
    return (
      <Course
        title={course.title}
        desc={course.description}
        img={course.im}
        key={course.id}
      />
    );
  });
  return (
    <div>
      <ul>{courses}</ul>
    </div>
  );
};

export default HTML;
