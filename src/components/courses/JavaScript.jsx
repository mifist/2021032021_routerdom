import Course from "./Course";
import { javaScriptCourses } from "../../data";

const JavaScript = (props) => {
  let courses = javaScriptCourses.map((course) => {
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

export default JavaScript;
