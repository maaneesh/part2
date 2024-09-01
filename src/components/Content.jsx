import React from "react";

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

function Content({ parts }) {
  const totalExcersises = parts.reduce(
    (total, { exercises }) => total + exercises,
    0
  );

  return (
    <>
      <div>
        {parts.map((course) => (
          <div key={course.id}>
            <Part name={course.name} exercises={course.exercises} />
          </div>
        ))}
      </div>
      <div>
        <h3> {`total of ${totalExcersises} excercises`}</h3>
      </div>
    </>
  );
}

export default Content;
