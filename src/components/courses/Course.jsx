const Course = ({ course }) => (
  <li className="course media group">
    <img className="course-img" src={course.im} alt="course" />
    <div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  </li>
);

export default Course;
