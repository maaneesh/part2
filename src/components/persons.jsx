import React from "react";

function Persons({ filteredPeople }) {
  return (
    <>
      <div>
        <ul>
          {filteredPeople.map((user) => (
            <li key={user.id}>
              {user.name} {user.number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Persons;
