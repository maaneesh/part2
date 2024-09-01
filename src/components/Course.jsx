import Content from "./Content";
import Header from "./Header";

function Course({ course }) {
  const { id, name, parts } = course;
  return (
    <>
      <h1>Web development curriculum</h1>
      <Header name={name} />
      <Content parts={parts} />
    </>
  );
}

export default Course;
